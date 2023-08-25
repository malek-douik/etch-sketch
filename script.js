const container = document.querySelector('.container');
let grid = 0;

while (true) {
    const input = prompt("What\'s the size of the grid? (max 100): ");
  
    grid = parseFloat(input);
  
    if (!isNaN(grid) && grid <= 100) {
      break;
    } else {
      alert("Invalid input. Please enter a value not greater than 100.");
    }
  }
  console.log(grid);


for (let i = 0; i < grid; i++) {
    const div_row = document.createElement('div');
    div_row.classList.add('row');
    div_row.style.cssText = 'display:flex;'
    container.appendChild(div_row);

    for (let j = 0; j < grid; j++) {
        const element = document.createElement('div');
        element.classList.add('element');
        element.textContent = '*';
        div_row.appendChild(element);
    }
}

const elements = document.querySelectorAll('.element');
elements.forEach(element => {
    element.addEventListener('mouseover', function (e) {
        if (e.ctrlKey) {
            element.classList.add('hovered');
        }
    });
});