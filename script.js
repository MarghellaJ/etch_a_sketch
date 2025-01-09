// declartions
const container = document.querySelector("#container");
const body = document.querySelector("body");

//create a button
const gridSize = document.createElement("button");
// add attributes or content
gridSize.textContent = "select grid size";
gridSize.addEventListener('click', function() {
   createDivs(0);
   const gridChoice = prompt("Select grid size 0-100");
   createDivs(gridChoice);
})
// append to the body
body.appendChild(gridSize);



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
         row.addEventListener('mouseover', function() {
            // Add hover effect
            row.style.backgroundColor = getRandomColor();
         });

         // Add content or attributes
         row.classList.add("row");
         row.style.border = "2px solid black";
         row.textContent = (i * divNum) + j;

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
// createDivs(12)