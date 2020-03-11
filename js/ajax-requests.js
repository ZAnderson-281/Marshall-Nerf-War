
//ON Menu Select Change
function changeJSON(clicked_id){
  //Create the variables
  let request;
  let data;
  let registry_table_element;
  let table_header;
  let dead = 0;
  let alive = 0;
  let sortKills = [];
  let sortNames = [];
  let sortID = [];

  // create the request
  request = new XMLHttpRequest();

  if (clicked_id === "ind-reg" || clicked_id === "playerInfo") {
    //creates the callback function
    request.onreadystatechange = function () {

      // if the server has returned a response
      if (request.readyState === 4){
        // Check if the status is 200 (ran with no issues) else return an ERROR message
        if (request.status === 200){
          table_header = `
          <th>Rank</th>
          <th>Player Name</th>
          <th>Status</th>
          <th>Kills</th>
          `
          document.getElementsByClassName('reg-thead')[0].innerHTML = table_header;
          document.getElementById('registryBody').innerHTML = '<tr></tr>';
          // Parse the json data into javascript
          dataraw = JSON.parse(request.responseText);

          let data = rawdata.sort(function(a,b){return b.kills - a.kills});
          // Log the data to the console
          console.log(data[0]);

          // for however many items in object create a table element
          for (let i = 0; i<data.length;i+=1){
            // table html code
            registry_table_element = `
            <td>${i+1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].status}</td>
            <td>${data[i].kills}</td>
              `;
            // log the html into the console
            console.log(registry_table_element);
            document.getElementById("registry").insertRow(i+1).innerHTML = registry_table_element;

            // sort
            if(data[i].status === "Alive"){
              alive += 1;
            }else if (data[i].status === "Dead"){
              dead += 1;
            }
          }

          document.getElementById('playerCountAlive').innerHTML = "Alive: "+alive;
          document.getElementById('playerCountDead').innerHTML = "Dead: "+dead;
          document.getElementById('playerCountAll').innerHTML = "Current Player Count: "+data.length;
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
  }else if(clicked_id == "vote-reg"){
    //creates the callback function
    request.onreadystatechange = function () {

      // if the server has returned a response
      if (request.readyState === 4){
        // Check if the status is 200 (ran with no issues) else return an ERROR message
        if (request.status === 200){
          table_header = `
          <th>Date</th>
          <th>Name</th>
          <th>Ruleings</th>
          <th>About</th>
          `
          document.getElementsByClassName('reg-thead')[0].innerHTML = table_header;
          document.getElementById('registryBody').innerHTML = '<tr></tr>';
          // Parse the json data into javascript
          dataraw = JSON.parse(request.responseText);

          let data = rawdata.sort(function(a,b){return b.kills - a.kills});
          // Log the data to the console
          console.log(data[0]);

          // for however many items in object create a table element
          for (let i = 0; i<data.length;i+=1){
            // table html code
            registry_table_element = `
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
              `;
            // log the html into the console
            console.log(registry_table_element);
            document.getElementById("registry").insertRow(i+1).innerHTML = registry_table_element;

            // sort
            if(data[i].status === "Alive"){
              alive += 1;
            }else if (data[i].status === "Dead"){
              dead += 1;
            }
          }

          document.getElementById('playerCountAlive').innerHTML = "Alive: "+alive;
          document.getElementById('playerCountDead').innerHTML = "Dead: "+dead;
          document.getElementById('playerCountAll').innerHTML = "Current Player Count: "+data.length;
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
  }else if (clicked_id === "team-reg" || clicked_id === "teamInfo") {
    //creates the callback function
    request.onreadystatechange = function () {

      // if the server has returned a response
      if (request.readyState === 4){
        // Check if the status is 200 (ran with no issues) else return an ERROR message
        if (request.status === 200){
          table_header = `
          <th>Team</th>
          <th>Team Rank</th>
          <th>Player Name</th>
          <th>Status</th>
          <th>Kills</th>
          `
          document.getElementsByClassName('reg-thead')[0].innerHTML = table_header;
          document.getElementById('registryBody').innerHTML = '<tr></tr>';
          // Parse the json data into javascript
          rawdata = JSON.parse(request.responseText);

          let data = rawdata.sort(function(a,b){return b.kills - a.kills});
          // Log the data to the console
          console.log(data[0]);

          // for however many items in object create a table element
          for (let i = 0; i<data.length;i+=1){
            // table html code
            registry_table_element = `
            <td>${data[i].team}</td>
            <td>${data[i].teamRanking}</td>
            <td>${data[i].name}</td>
            <td>${data[i].status}</td>
            <td>${data[i].kills}</td>
              `;
            // log the html into the console
            console.log(registry_table_element);
            document.getElementById("registry").insertRow(i+1).innerHTML = registry_table_element;

            // sort
            if(data[i].status === "Alive"){
              alive += 1;
            }else if (data[i].status === "Dead"){
              dead += 1;
            }
          }

          document.getElementById('playerCountAlive').innerHTML = "Alive: "+alive;
          document.getElementById('playerCountDead').innerHTML = "Dead: "+dead;
          document.getElementById('playerCountAll').innerHTML = "Current Player Count: "+data.length;
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
  }else{
    //creates the callback function
    request.onreadystatechange = function () {

      // if the server has returned a response
      if (request.readyState === 4){
        // Check if the status is 200 (ran with no issues) else return an ERROR message
        if (request.status === 200){
          table_header = `
          <th>Rank</th>
          <th>Player Name</th>
          <th>Kills</th>

          `
          document.getElementsByClassName('reg-thead')[0].innerHTML = table_header;
          document.getElementById('registryBody').innerHTML = '<tr></tr>';
          // Parse the json data into javascript
          rawdata = JSON.parse(request.responseText);

          let data = rawdata.sort(function(a,b){return b.kills - a.kills});
          // Log the data to the console
          console.log(data[0]);

          // for however many items in object create a table element
          for (let i = 0; i<data.length;i+=1){
            // table html code
            registry_table_element = `
            <td class="pt-2 pb-2">${i+1}</td>
            <td class="pt-2 pb-2">${data[i].name}</td>
            <td class="pt-2 pb-2">${data[i].kills}</td>
 
              `;

            // log the html into the console
            console.log(registry_table_element);
            document.getElementById("registry").insertRow(i+1).innerHTML = registry_table_element;

            // sort
            if(data[i].status === "Alive"){
              alive += 1;
            }else if (data[i].status === "Dead"){
              dead += 1;
            }
          }

          document.getElementById('playerCountAlive').innerHTML = "Alive: "+alive;
          document.getElementById('playerCountDead').innerHTML = "Dead: "+dead;
          document.getElementById('playerCountAll').innerHTML = "Current Player Count: "+data.length;

          console.log(data.sort(function(a,b){return b.kills - a.kills}));

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
  }
}
document.pageload(changeJSON());
