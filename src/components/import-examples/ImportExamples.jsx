import React, { useState } from "react";
import { importFileToInternalJson } from "../../utils/file-import";
import CommentsService from "../../services/comments.service";
import "./ImportExamples.css";

export default function ImportExamples() {

  const [internalJson, setInternalJson] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // esto convierte cualquier archivo en daa
  const normalizeData = (item) => {
    return {
      user: item.user || item.name || "",
      email: item.email || "",
      subject: item.subject || item.year || "",
      comment: item.comment || item.population || ""
    };
  };

  const handleImport = async () => {
    try {
      setError("");
      setLoading(true);

      // Abres el archivo
      const result = await importFileToInternalJson();

      setInternalJson(result);

      // 2. Confirmación (quitarlo )
      const confirmImport = window.confirm(
        "Se añadirán nuevos comentarios a Firebase. ¿Continuar?"
      );

      if (!confirmImport) {
        setLoading(false);
        return;
      }

      // 3. Asegurar array válido
      const rows = Array.isArray(result.data)
        ? result.data
        : [result.data];

      // 4. Importar a Firebase
      for (const item of rows) {

        const comment = normalizeData(item);

        // evitar vacíos
        if (!comment.user && !comment.email && !comment.comment) continue;

        await CommentsService.addComment(
          comment.user,
          comment.email,
          comment.subject,
          comment.comment
        );
      }

      alert("Comentarios importados correctamente 🚀");

    } catch (err) {
      if (err?.name === "AbortError") return;

      setError(err.message || "Error importando archivo");

    } finally {
      setLoading(false);
    }
  };

   return (
    <div className="importation">
      <h3 className="title">Importar Comentarios</h3>

      <div className="import-buttons">

        <button onClick={handleImport}>
          {loading ? "Importando..." : "Import File"}
        </button>

      </div>
    </div>
  );
}