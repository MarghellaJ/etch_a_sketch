// declartions
const body = document.querySelector("body");
const container = document.querySelector("#container");


//create a button
const sizeBtn = document.querySelector("#btn");
// add attributes or content
sizeBtn.textContent = "select grid size";
sizeBtn.addEventListener('click', function () { // eventListener for button click to input size of grid
   cleanUp();
   let userInput = prompt("Select grid size 0-100");
   // container.textContent = "";

   createDivs(userInput);
})
// append to the body
body.appendChild(sizeBtn);

const resetBtn = document.createElement("button");

resetBtn.textContent = "Reset Board";
resetBtn.style = "background-color: red; border: 5px solid green;"
resetBtn.classList = "#reset";
resetBtn.addEventListener('click', () => {
   cleanUp();
   createDivs(16);
})

body.appendChild(resetBtn);

function cleanUp() {
   // clear screen when userInput entered so grids aren't overlapping
   if (container.innerHTML != "")
      container.innerHTML = "";
}

function getRandomColor() {
   // declare letters and numbers of hex color code
   const letters = '0123456789ABCDEF';

   // the color selection will be a hex color code ie #0076h4
   let color = '#';

   // loop through and get a random hex color code using Math.floor and random
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   // return the hex color code
   return color;
}

function createDivs(divNum) {
   // Loop to create columns
   for (let i = 0; i < (divNum); i++) {
      // create new div element
      const column = document.createElement('div');

      // Add content or attributes to the div
      column.classList.add("column");

      // Loop for rows
      for (let j = 1; j <= divNum; j++) {
         const row = document.createElement('div');
         row.addEventListener('mouseover', function () {
            // Add hover effect
            row.style.backgroundColor = getRandomColor();
         });

         // Add content or attributes
         row.classList.add("row");
         row.style.border = "2px solid black";
         // row.textContent = (i * divNum) + j;
         row.textContent = '*';

         // Append the rows to columns
         column.appendChild(row);
      }

      // Append to the container
      container.appendChild(column);
      console.log(container.children.length) //divNum

   }

   // const cells = document.querySelector(".column, .row");
   // cells.addEventListener('mouseover', function() {
   //    // Add hover effect
   //    this.style.backgroundColor = 'blue';
   // });

   // cells.addEventListener('mouseover', function() {
   //    // Remove hover effect
   //    this.style.backgroundColor = '';
   // });



   console.log(divNum);
}
//Create x number of divs
createDivs(16);