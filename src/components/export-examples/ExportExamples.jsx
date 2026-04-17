import "./ExportExamples.css";
import { saveFileInFormat } from "../../utils/file-export";

function ExportExamples({ data }) {

  return (
    <div className="exportation">
      <h3 className="title">Exporta los Comentarios</h3>

      <div className="export-buttons">

        <button onClick={() => saveFileInFormat("json", data, "comments.json")}>
          JSON
        </button>

        <button
          onClick={() =>
            saveFileInFormat("csv", data, "comments.csv")
          }
        >
          CSV
        </button>

        <button
          onClick={() =>
            saveFileInFormat("xml", data, "comments.xml")
          }
        >
          XML
        </button>

      </div>
    </div>
  );
}

export default ExportExamples;