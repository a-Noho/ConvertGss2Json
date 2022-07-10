function doGet(e) {
  // sheetNameとidが、parameterとして設定されていることが前提。
  var sheetName = e.parameter.sheetName;
  var url = get_ss_url_from(e.parameter.id);

　// シートを取得する。
  var sheet = SpreadsheetApp.openByUrl(url).getSheetByName(sheetName);

  if(sheet != null)
  {
    return convert_sheet_to_json(sheet);
  }
  else
  {
    Logger.log("NoSheets here");
  }
}

function get_ss_url_from(ssId){
  return 'https://docs.google.com/spreadsheets/d/SPREADSHEETID/edit?usp=sharing'.replace("SPREADSHEETID", ssId);
}