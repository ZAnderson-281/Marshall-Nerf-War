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

      // for however many items in object create a table element
      for (let i = 0; i<data.length;i+=1){
        // table html code
        registry_table_element = `
        <td>${i+1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].gameName}</td>
        <td>${data[i].email}</td>
        <td>${data[i].team}</td>
        <td>${data[i].teamRanking}</td>
        <td>${data[i].paid}</td>
        <td>${data[i].timedOut}</td>
        <td>${data[i].kills}</td>
        <td>${data[i].bounty}</td>
        <td>${data[i].killedBy}</td>
        <td>${data[i].killedBy2}</td>
          `;
        // log the html into the console
        //console.log(registry_table_element);
        document.getElementsByClassName("mainTable")[0].insertRow(i+1).innerHTML = registry_table_element;
      }

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
