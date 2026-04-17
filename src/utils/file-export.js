import { showSaveFilePicker } from "show-open-file-picker";

function jsonToCsv(data) {
  if (!data || !data.length) return "";

  const headers = Object.keys(data[0]).join(",");

  const rows = data.map(item =>
    Object.values(item).join(",")
  );

  return [headers, ...rows].join("\n");
}

function jsonToXml(data) {
  if (!data || !data.length) return "";

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<comments>\n`;

  data.forEach(item => {
    xml += `  <comment>\n`;

    Object.entries(item).forEach(([key, value]) => {
      xml += `    <${key}>${value}</${key}>\n`;
    });

    xml += `  </comment>\n`;
  });

  xml += `</comments>`;

  return xml;
}

export const saveFileInFormat = async (
  format,
  data,
  fileName = "data.json"
) => {

  let description = "";
  let acceptedType = {};
  let content = "";

  switch (format) {

    case "json":
      description = "JSON";
      acceptedType = {
        "application/json": [".json"],
      };
      content = JSON.stringify(data, null, 2);
      break;

    case "csv":
      description = "CSV";
      acceptedType = {
        "text/csv": [".csv"],
      };
      content = jsonToCsv(data);
      break;

    case "xml":
      description = "XML";
      acceptedType = {
        "application/xml": [".xml"],
        "text/xml": [".xml"],
      };
      content = jsonToXml(data);
      break;

    default:
      throw new Error(`Unsupported format: ${format}`);
  }

  const handle = await showSaveFilePicker({
    suggestedName: fileName,
    types: [
      {
        description,
        accept: acceptedType,
      },
    ],
  });

  const writable = await handle.createWritable();
  await writable.write(content);
  await writable.close();
};
