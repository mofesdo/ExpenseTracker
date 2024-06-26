load();

function load(){
    console.log("loading table...")
    let table = document.querySelector("#table");
    let expenses = JSON.parse(localStorage.getItem("expenses"));
    let name = "name";
    //For each element in array of expenses, add a row to the table html
    for(let i = 0; i < expenses.length; i++){
        name = expenses[i].name;
        table.innerHTML += `<tbody class = ${name}>` + `<tr><td>` + expenses[i].name + "</td><td>" + expenses[i].date + "</td><td>" + expenses[i].amount + `<button onclick="remove('${name}')">X</button></td></tr>` + "</tbody>"
    }
}

function add(){
    console.log("adding new expense")
    //Get expenses from local storage
    let expenses = JSON.parse(localStorage.getItem("expenses"));

    let name = document.querySelector("#name").value;
    let date = document.querySelector("#date").value;
    let amount = document.querySelector("#amount").value;

    //Create expense and push it onto the local storage
    let expense = {name, date, amount};
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

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
    deleteBtn.addEventListener("click",function(){ remove(name); })
    amountCell.appendChild(deleteBtn);
    row.appendChild(amountCell);

    //Append new row with date to table
    table.appendChild(row);
}

function remove(name){
    let row = document.querySelector(`.${name}`)

    //Delete table row in html
    let table = document.querySelector("#table");
    table.removeChild(row);

    //Delete expense from local storage
    let expenses = JSON.parse(localStorage.getItem("expenses"));
    let index = "";
    //Find index of expense we want deleted
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].name == name){
            index = i;
        }
    } 
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
