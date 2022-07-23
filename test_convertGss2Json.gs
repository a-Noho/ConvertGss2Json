function requestDoGet()
{
  const e = {
    parameter:{
      sheetName: 'テストシート',
      id: '1tIA6NfrNiQ_ZvDZmCMfyPbzOqxPBJujBA4-zJLePQFo',
    }
  }

  let result_json = doGet(e);
  Logger.log(result_json.getContent());
}
