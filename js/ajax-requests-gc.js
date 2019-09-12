//Create the variables
let request;
let data;
let registry_table_element;
let dead;
let alive;
// create the request
request = new XMLHttpRequest();
dead=0;
alive=0;

// creates the callback function
request.onreadystatechange = function () {

  // if the server has returned a response
  if (request.readyState === 4){
    // Check if the status is 200 (ran with no issues) else return an ERROR message
    if (request.status === 200){

      // Parse the json data into javascript
      data = JSON.parse(request.responseText);
      // Log the data to the console
      // console.log(data);
    }else{
      //alert the error
      alert(request.status);
    }



  }
}
// Open the request as a get
request.open('GET', 'json/registryData.json');

// Send the request to the server
request.send();
