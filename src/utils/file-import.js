import { showOpenFilePicker } from "show-open-file-picker";
import Papa from "papaparse";

function ensureArray(data) {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}

function xmlToJson(text) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "application/xml");
  const errorNode = xmlDoc.querySelector("parsererror");
  if (errorNode) {
    throw new Error("XML invalid");
  }

  const comments = xmlDoc.getElementsByTagName("comment");

  const data = Array.from(comments).map(comment => {
    const obj = {};

    Array.from(comment.children).forEach(node => {
      obj[node.tagName] = node.textContent;
    });

    return obj;
  });

  return data;
}

function csvToJson(text) {
  const result = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });

  if (result.errors.length) {
    throw new Error("CSV invalid");
  }

  return result.data;
}

function getExtension(fileName) {
  return fileName.split(".").pop()?.toLowerCase() || "";
}

function parseFileContent(extension, text) {
  switch (extension) {
    case "json":
      return ensureArray(JSON.parse(text));

    case "xml":
      return ensureArray(xmlToJson(text));

    case "csv":
      return ensureArray(csvToJson(text));

    default:
      throw new Error(`Unsupported format: ${extension}`);
  }
}

export async function importFileToInternalJson() {
  const [fileHandle] = await showOpenFilePicker({
    multiple: false,
    types: [
      {
        description: "compatible files",
        accept: {
          "application/json": [".json"],
          "application/xml": [".xml"],
          "text/xml": [".xml"],
          "text/csv": [".csv"],
        },
      },
    ],
  });

  const file = await fileHandle.getFile();
  const text = await file.text();
  const extension = getExtension(file.name);

  const data = parseFileContent(extension, text);

  return {
    fileName: file.name,
    format: extension,
    data,
  };
}