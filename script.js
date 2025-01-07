const container = document.querySelector('container');

function createBoxes(boxNum) {
   for (let i = 0; i < boxNum * boxNum; i++){
      const row = container.appendChild(document.createElement('div'));
      for (let j = 0; j < (boxNum - 1); j++){
         const box = document.createElement('div');
         box.className='square';
         row.appendChild(box);
      }
   }
}
// const gs1 = document.createElement(div);
// container.appendChild(gs1);
createBoxes(2);