import React, { useState } from "react";
import { importFileToInternalJson } from "../../utils/file-import";
import CommentsService from "../../services/comments.service";
import "./ImportExamples.css";

export default function ImportExamples() {
  const [internalJson, setInternalJson] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImport = async () => {
    try {
      setError("");
      setLoading(true);

      // Importar archivo
const result = await importFileToInternalJson();

const rows = Array.isArray(result.data)
  ? result.data
  : [result.data];

for (const item of rows) {
  await CommentsService.addComment(
    item.user || "",
    item.email || "",
    item.subject || "",
    item.comment || ""
  );
}

      // Confirmación
      const confirmImport = window.confirm(
        "Se añadirán nuevos comentarios a Firebase. Continuar?"
      );

      if (!confirmImport) {
        setLoading(false);
        return;
      }

      // Añadir comentarios
      for (const item of result) {
        await CommentsService.addComment(
          item.user || "",
          item.email || "",
          item.subject || "",
          item.comment || ""
        );
      }

      alert("Comentarios importados 🚀");

    } catch (err) {
      if (err?.name === "AbortError") return;

      setError(err.message || "File import failed");
    }

    setLoading(false);
  };

  return (
    <>
      <h1>Import Examples</h1>

      <div className="import-buttons">

        <button onClick={handleImport}>
          {loading ? "Importando..." : "Import File"}
        </button>

      </div>
    </>
  );
}
