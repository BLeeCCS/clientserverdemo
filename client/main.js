$(document).ready(startApp);

function startApp(){
  getData();
}

function getData(){
  var setting = {
    url:'../server/getnames.json',
    method:'GET',
    dataType: 'json',
    success: handleDataFromServer
  }
  $.ajax(setting);
}

function handleDataFromServer(response){
  console.log(response);
}
