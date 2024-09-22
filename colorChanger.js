document.addEventListener("DOMContentLoaded", function () {
  console.log("THE DOM IS FULLY READY!!!");
});

let changeColorBtn = document.getElementById("change-color-btn");
changeColorBtn.addEventListener("click", updateColorBox);

function getRandomColor() {
  let colorLetters = "0123456789ABCDEF";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += colorLetters[Math.floor(Math.random() * 16)];
  }

  return colorCode;
}

function updateColorBox() {
  let colorDisplayBox = document.getElementById("color-box");

  const randomColor = getRandomColor();
  colorDisplayBox.style.background = randomColor;
}
