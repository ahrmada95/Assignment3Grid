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
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
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
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}