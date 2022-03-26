//Ahnaf Ahmad 

// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //get table object and retrieve it from doc
    const table = document.getElementById("grid")
    //create row object and insert into the table at end
    var row = table.insertRow(0)

    //in case there is no columns, produce single column
    if (numCols == 0){
        //define table 
        const td = document.createElement('td')
        //create cell object and append to end of bottom row
        cell = row.appendChild(td)
        //set default color
        cell.style.backgroundColor = 'white'
        //iterate num of col count
        numCols += 1
        //iterate num of row count
        numRow += 1
    }

    //if there already are other columns, then just append as normal
    else{
        //loop through and append
        for (var i = 0; i < numCols; i++){
            //define table 
            const td = document.createElement('td')
            //create cell object and append to end of bottom row
            cell = row.appendChild(td)
            //set default color
            cell.style.backgroundColor = 'white'
        }
    }
    //iterate num of row count
    numRows += 1
}

// Add a column
function addC() {
    //get table object and retrieve it from doc
    const table = document.getElementById("grid")
    //get all rows
    var rows = table.rows

    //in case there are no columns, call addR function to initialize table
    if (numCols == 0){
        addR()
    }

    //else, append as normal 
    else{
        for (var i = 0, row; row = table.rows[i]; i++){
            const td = document.createElement('td') 
            row.appendChild(td)
            cell = row.appendChild(td)
            cell.style.backgroundColor = 'white'
        }
    }
    //iterate number of col
    numCols += 1
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    //array var to hold all "cells" of the table from document
    var fillUp = document.querySelectorAll('td')
    //iterate through each cell
    fillUp.forEach(cell => {
        //check to see if it is a default color
        if(cell.style.backgroundColor == 'white'){
            //if it is, change to color selected
            cell.style.backgroundColor = colorSelected
        }
    });
}

// Fill all cells
function fillAll(){
    //array var to hold all "cells" of the table from document
    var fillUp = document.querySelectorAll('td')
    //iterate through each cell
    fillUp.forEach(cell => {
        //change each color to white 
        cell.style.backgroundColor = colorSelected
    });
}

// Clear all cells
function clearAll(){
    //array var to hold all "cells" of the table from document
    var fillUp = document.querySelectorAll('td')
    //iterate through each cell
    fillUp.forEach(cell => {
        //change each color to white 
        cell.style.backgroundColor = 'white'
    });
}