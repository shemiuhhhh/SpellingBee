
async function getUserData(){
    const response = await fetch('/api/users');
    return response.json();
}

function loadTable(users){
    const table = document.querySelector('#result');
    for(let user of users){
        table.innerHTML += `<tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
        </tr>`;
    }
}

function loadWord(word){
    const tab = document.querySelector('#random');
    tab.innerHTML+=`<font color = "#0000FF">This text will appear white on black background.</font>`;
}

const url = 'https://random-word-api.herokuapp.com/word';
async function randomWord(){
    const resp = await fetch(url);
    return resp.json();
}

async function main(){
    const users = await getUserData();
    loadTable(users);
    
    const rand =await randomWord();
    loadWord (word);

}

main();