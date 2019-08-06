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
    success: handleDataNameFromServer
  }
  $.ajax(setting);
}

function getFood(){
  var setting = {
    url:'http://localhost:3000/getFood',
    method:'GET',
    dataType: 'text',
    success: handleDataFromServer,
    error: function(error){
      console.log('error')
    }
  }
  $.ajax(setting);
}

function handleDataFromServer(response){
  console.log(response);
}

function handleDataNameFromServer(response) {
  console.log(response);
  for(var index = 0; index < response.length; index++){
    var nameDiv = $('<div>').text(response[index].name);
    $('body').append(nameDiv);
  }
}
