$(document).ready(startApp);

function startApp(){
  getData();
  getFood();
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

function getFood(){
  var setting = {
    url:'../server/getFood.json',
    method:'GET',
    dataType: 'json',
    success: handleDataFromServer
  }
  $.ajax(setting);
}

function handleDataFromServer(response){
  console.log(response);
}
