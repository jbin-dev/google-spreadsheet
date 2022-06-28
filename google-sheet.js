const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./.ignore/sa-credential.json");

let doc = null;

async function docInit(sheetId) {
  doc = new GoogleSpreadsheet(sheetId);
  const creds = {
    client_email: process.env.GOOGLE_SHEET_SA_EMAIL,
    private_key: process.env.GOOGLE_SHEET_SA_PRIVATE_KEY,
  };
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  return doc;
}

async function updateProperties(properties = {}) {
  return doc.updateProperties(properties);
}

async function sheetInit(id) {
  switch (typeof id) {
    case "number":
      return doc.sheetsByIndex[id];
    case "string":
      return doc.sheetsByTitle[id];
    default:
      break;
  }
}

async function addSheet(id, headers = []) {
  return doc.addSheet({ title: id, headerValues: headers });
}

async function deleteSheet(sheet) {
  return sheet.delete();
}

async function getRows(sheet) {
  return sheet.getRows();
}

async function addRow(sheet, value) {
  const rows = await sheet.addRow(value);
  return rows;
}

async function updateRow(rows, rowIndex, key, value) {
  rows[rowIndex][key] = value;
  return rows[key].save();
}

async function deleteRow(rows, rowIndex) {
  return rows[rowIndex].delete();
}

async function loadCell(sheet, range) {
  return sheet.loadCells(range);
}

async function getCell(sheet, range = [], isA1 = false) {
  if (isA1) {
    return sheet.getCellByA1(range);
  } else {
    return sheet.getCell(range[0], range[1]);
  }
}

module.exports = {
  docInit,
  updateProperties,
  sheetInit,
  addSheet,
  deleteSheet,
  getRows,
  addRow,
  updateRow,
  deleteRow,
  loadCell,
  getCell,
};
