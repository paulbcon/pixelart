
/*
* Make a grid based on user's specified width and height
*/
const makeGrid = () => {
    // Your code goes here!

    let gridHeight = document.getElementById('inputHeight').value;
    let gridWidth = document.getElementById('inputWidth').value;

    // Create table rows
    for (let tr = 0; tr < parseInt(gridHeight); tr++) {
        const canvas = document.getElementById('pixelCanvas').insertRow(tr);

        //Create table columns
        for (let td = 0; td < parseInt(gridWidth); td++) {

            //Create a grid   
            let box = canvas.insertCell(td);
            //Assigned an id to each box of the grid
            box.id = `${tr}${td}`;
            box.onclick = function () { changeBackground(this.id); };
        }
    }
}


/* Function to empty content of the table. This function will be used 
* to reset the size of the grid. 
*/
const clearTable = () => {
    let table = document.getElementById("pixelCanvas");
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

/*
* This function will change the background color of each grid
* @param {string} id
*/
const changeBackground = (id) => {

    // Target which element (td) should be changed its background
    const el = document.getElementById(id);

    // Switch between no background color and the user's selected color
    const noBGColor = el.classList.toggle('noBGColor');

    // Select color input
    const drawingColor = document.getElementById('colorPicker').value;

    /* Check if the background color exists. If not, set the background 
    *  from the user's selected color.
    */
    noBGColor ? el.style.backgroundColor = drawingColor : el.style.backgroundColor = null;
}

/*
* When the user click the submit button, it will reset the grid and the content of
* each box will be emptied.
* param {event} e 
*/
const formSubmit = (e) => {
    e.preventDefault();
    clearTable();
    makeGrid();
};

// Select size input. 
const form = document.getElementById('sizePicker');

/* 
* When size is submitted by the user, call makeGrid()
*/

form.addEventListener('submit', formSubmit);