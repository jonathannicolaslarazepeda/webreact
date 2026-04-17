import React, { useState } from "react";
import { importFileToInternalJson } from "../../utils/file-import";
import CommentsService from "../../services/comments.service";
import "./ImportExamples.css";

export default function ImportExamples({ onImportSuccess }) {

  const [showModal, setShowModal] = useState(false);
  const [pendingData, setPendingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const normalizeData = (item) => ({
    user: item.user || item.name || "",
    email: item.email || "",
    subject: item.subject || item.year || "",
    comment: item.comment || item.population || ""
  });

  const handleImport = async () => {
    try {
      setLoading(true);

      const result = await importFileToInternalJson();

      const rows = Array.isArray(result.data)
        ? result.data
        : [result.data];

      setPendingData(rows);
      setShowModal(true);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const confirmImport = async () => {
    try {
      setLoading(true);

      for (const item of pendingData) {
        const comment = normalizeData(item);

        await CommentsService.addComment(
          comment.user,
          comment.email,
          comment.subject,
          comment.comment
        );
      }

 
      if (onImportSuccess) {
   onImportSuccess();
}
      setShowModal(false);

    } catch (err) {
      setError(err.message);
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

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">

              <h2 className="title">¿Añadir Comentarios?</h2>

              <button onClick={confirmImport}>
                Confirmar
              </button>

              <button onClick={() => setShowModal(false)}>
                Cancelar
              </button>

            </div>
          </div>

        )}
      </div>
      {error && <p>{error}</p>}

    </div>
  );
}
