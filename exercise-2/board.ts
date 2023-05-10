const size = 8; // Размер доски
const whiteCell = '?'; // Символ для белой клетки
const blackCell = '!'; // Символ для черной клетки

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      row += whiteCell;
    } else {
      row += blackCell;
    }
  }
  console.log(row);
}
