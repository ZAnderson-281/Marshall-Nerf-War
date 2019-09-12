//Create the variables

// create the request
let request = new XMLHttpRequest();
let data;
let registry_table_element;
let dead=0;
let alive=0;

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

      // LIVE REGISTRY

      // for however many items in object create a table element
      for (let i = 0; i<data.length;i+=1){
        // table html code
        registry_table_element = `
            <td scope="row">${i+1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].status}</td>
            <td>${data[i].team}</td>
            <td>${data[i].kills}</td>
            <td>${data[i].killedBy}</td>
            <td>${data[i].killedBy2}</td>
          `;
        // log the html into the console
        //console.log(registry_table_element);
        document.getElementById("registry").insertRow(i+1).innerHTML = registry_table_element;
      }

      // PLAYER PROFILE
      for (let i=0;i<data.length;i+=1){
        if(data[i].status === "Alive"){
            alive += 1;
        }else{
            dead += 1;
        }
      };

      document.getElementById('playerCountAll').innerHTML = `Current Players: ${data.length}`;
      document.getElementById('playerCountAlive').innerHTML = `Alive: ${alive}`;
      document.getElementById('playerCountDead').innerHTML = `Dead: ${dead}`;
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
