const baseUrl = "https://game-server.geoguessr.com/api/duels/";
let duelID = null;
let contentDiv = document.getElementById("content");


document.getElementById("openApi").addEventListener("click", function() {
    let duelURL = document.getElementById("duelURL").value.split('/');
    duelID = duelURL[duelURL.length - 1];

    window.open(baseUrl + duelID);
});

document.getElementById("print").addEventListener("click", function() {
    contentDiv.innerHTML = "";

    printTable();
});

function printTable() {
    let json = JSON.parse(document.getElementById("json").value);

    console.log(json);

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let firstRow = document.createElement("tr");
    let redTitle = document.createElement("th");
    let blueTitle = document.createElement("th");

    redTitle.innerText = "Équipe 1 (Rouge)";
    blueTitle.innerText = "Équipe 2 (Bleu)";

    firstRow.appendChild(redTitle);
    firstRow.appendChild(blueTitle);
    thead.appendChild(firstRow);

    var tr, tdRed, tdBlue;

    for(let i = 0; i < json.currentRoundNumber; i++) {
        tr = document.createElement("tr");

        tdRed = document.createElement("td");
        tdRed.innerText = json.teams[0].roundResults[i].score;

        tdBlue = document.createElement("td");
        tdBlue.innerText = json.teams[1].roundResults[i].score;

        tr.appendChild(tdRed);
        tr.appendChild(tdBlue);
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    contentDiv.appendChild(table);
}
