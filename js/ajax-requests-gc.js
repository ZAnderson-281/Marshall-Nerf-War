const apiUrl = 'http://localhost:5000/api/users';
const getDataFromForm = () => {
    let userData = {
        id: 3,
        name: null,
        email: null,
        paid: null,
        gameName: null,
        team: null,
        teamRanking: null,
        status: null,
        timedOut: null,
        bounty: null,
        kills: null,
        killsName: null,
        killedBy: null,
        killedBy2: null,
        notes: null
      };

    const input = document.querySelectorAll('input');

    console.log(input);

    input.forEach((element, index) => {
        if (element.value == ''){return;}

        switch (index){
            case 1:
                userData.name = element.value;
                element.value = '';
                break;
            case 2:
                userData.email = element.value;
                element.value = '';
                break;
            case 3:
                userData.gameName = element.value;
                element.value = '';
                break;
            case 4:
                userData.kills = element.value;
                element.value = '';
                break;
            case 5:
                userData.rank = element.value;
                element.value = '';
                break;
            case 6:
                userData.status = element.checked;
                element.checked = false;
                break;
            case 7:
                userData.paid = element.checked;
                element.checked = false;
                break;
            case 8:
                userData.killedBy = element.value;
                element.value = '';
                break;
            case 9:
                userData.notes = document.querySelector('#otherNotes').value;
                document.querySelector('#otherNotes').value = '';
                break;
        }
    })
    console.log(userData);

    fetch(apiUrl,{
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(userData)
    })

    location.reload();
}
async function fillForm() {
    id = event.currentTarget.id
    console.log(id)

    await fetch('http://localhost:5000/api/users/'+id)
    .then(data => data.json())
    .then(data => {
        const form = document.querySelector('#GAME-DATA-INPUT');
        form.name.value = data.name;
        form.email.value = data.email;
        form.paid.checked = data.paid;
        form.gameName.value = data.gameName;
        // form.team.value = data.team;
        // form.teamRanking.value = data.teamRanking;
        form.status.checked = data.status;
        form.timedOut.checked = data.timedOut;
        // form.bounty.value = data.bounty;
        form.kills.value = data.kills;
        // form.killsList.value = data.killsList;
        form.killedBy.value = data.killedBy;
        form.killedBy2.value = data.killedBy2;
        form.otherNotes.value = data.notes;
        form.rank.value = data.rank;
    })


}
const GAME_DATA_SUBMIT = () => {
    const subButton = document.querySelector('#submitCompCreator');    
    subButton.addEventListener('click', getDataFromForm);
}

async function GET_USER_DATA () {
    await fetch(apiUrl,{
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then(data => data.json()).then(data => {
        const regTable = document.querySelector('#registryBody');
        const tableHead = document.querySelector('#dataTableHeader');

        for (let key of Object.keys(data[0])) {
            // console.log(`${key}: ${value}`);
            if(!(key === "_id")){
                const th = document.createElement('TH');
                th.innerHTML = key;
                tableHead.appendChild(th);
            }
        }

        data.forEach(player => {
            const tableRow = document.createElement('TR');
            tableRow.classList.add('entry');
            tableRow.id = player._id;

            for (let [key, value] of Object.entries(player)) {
                // console.log(`${key}: ${value}`);
                if (!(key === '_id')) {
                    const tc = document.createElement('TD');
                    tc.innerHTML = value;
                    tableRow.appendChild(tc);
                }
            }
            regTable.appendChild(tableRow);
        })  
    });

    let rows = document.querySelectorAll('.entry')
    rows.forEach(entry => {
        entry.addEventListener('click', fillForm);
    })

}

// MAIN FUNCTION
const Main = () => {
    GET_USER_DATA();
    GAME_DATA_SUBMIT();
}

document.onload = Main();