
//document.querySelector("#addButton").addEventListener("click", add);

function add(){
    console.log("adding new expense")
    let name = document.querySelector("#name").value;
    let date = document.querySelector("#date").value;
    let amount = document.querySelector("#amount").value;

    //Get table and create row element
    let table = document.querySelector("#table");
    let row = document.createElement("tr");
    row.classList.add(name);

    //Create name cell for table and append it to row
    let nameCell = document.createElement("td");
    nameCell.innerHTML = name;
    row.appendChild(nameCell);

    //Create date cell for table and append it to row
    let dateCell = document.createElement("td");
    dateCell.innerHTML = date;
    row.appendChild(dateCell);

    //Create amount cell for table and append it to row
    let amountCell = document.createElement("td");
    amountCell.innerHTML = amount;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X"
    deleteBtn.addEventListener("click", remove)
    amountCell.appendChild(deleteBtn);

    row.appendChild(amountCell);

    //Append new row with date to table
    table.appendChild(row);
}

function remove(){

    let row = document.querySelector(`.${document.querySelector("#name").value}`)
    console.log(row)
}