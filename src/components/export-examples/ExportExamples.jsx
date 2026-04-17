import "./ExportExamples.css";
import { saveFileInFormat } from "../../utils/file-export";

function ExportExamples({ data }) {

  return (
    <>
      <h1>Export Firebase Data</h1>

      <div className="export-buttons">

        <button onClick={() => saveFileInFormat("json", data, "comments.json")}>
          Export JSON
        </button>

        <button
          onClick={() =>
            saveFileInFormat("csv", data, "comments.csv")
          }
        >
          Export CSV
        </button>

        <button
          onClick={() =>
            saveFileInFormat("xml", data, "comments.xml")
          }
        >
          Export XML
        </button>

      </div>
    </>
  );
}

export default ExportExamples;