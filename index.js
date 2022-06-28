require("dotenv").config();
const googleSheet = require("./google-sheet");

(async function () {
  const doc = await googleSheet.docInit(
    "1sZ2WKZl8AJVUSAH42ES3Yt79geuRiGjjngvQp4a7U_s"
  );

  // Update Properties
  //   await googleSheet.updateProperties({ title: "Google Spreadsheet - Updated" });

  // Init sheet
  const sheet = await googleSheet.sheetInit("Testing sheet");

  // Add sheet
  //   await googleSheet.addSheet("Testing sheet", ["header1", "header2"]);

  // Add Rows
  //   const result = await googleSheet.addRow(sheet, {
  // header1: "test",
  // header2: "test2",
  //   });

  // Get Rows
  //   const rows = await googleSheet.getRows(sheet);
  //   console.log(rows.value);

  // load cell
  //   await googleSheet.loadCell(sheet, "A1:B2");
  //   console.log(sheet.cellStats);

  // get cell
  //   const a2 = await googleSheet.getCell(sheet, [1, 0]);
  //   console.log(a2.value);
})();
