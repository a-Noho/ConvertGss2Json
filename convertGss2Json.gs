// 定義行は(1, 1)から始まり、Row:1に存在するものとする。
function generateTableFrom(sheet){
  let definitions = sheet.getRange(1, 1, 1, sheet.getRange(1, 1).getNextDataCell(SpreadsheetApp.Direction.NEXT).getColumn()).getValues()[0];
  let dataValues = sheet.getRange(2, 1, sheet.getMaxRows(), definitions.length).getValues();
  let dataTable = [];
  let index = -1;
  while(dataValues[++index].filter((value) => value != "").length != 0){
    dataTable[index] = dataValues[index];
  }
  return [definitions, dataTable];
}

function generateJsonFrom(definitions, dataTable){
  let jsonArray = [];
  for(let row = 0; row < dataTable.length; row++)
  {
    let line = dataTable[row];
    let obj = new Object();
    for(let column = 0; column < definitions.length; column++)
    {
      // 定義をJsonの要素に注入
      obj[definitions[column]] = line[column];
    }
    jsonArray.push(obj);
  }
  return ContentService.createTextOutput(JSON.stringify(jsonArray)).setMimeType(ContentService.MimeType.JSON);
}

function convertSheet2Json(sheet){
  let result = generateTableFrom(sheet);
  return generateJsonFrom(result[0], result[1]);
}
