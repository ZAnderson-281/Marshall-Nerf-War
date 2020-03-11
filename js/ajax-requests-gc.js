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

    fetch('http://localhost:5000/api/users',{
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(userData)
    })
}

// MAIN FUNCTION
const GAME_DATA_SUBMIT = () => {
    const subButton = document.querySelector('#submitCompCreator');

    subButton.addEventListener('click', getDataFromForm);

}

GAME_DATA_SUBMIT();
