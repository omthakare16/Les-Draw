const container = document.getElementById("container");
const catppuccin = ['#f4dbd6', '#f0c6c6', '#f5bde6', '#c6a0f6', '#ed8796', '#ee99a0', '#f5a97f', '#eed49f', '#a6da95', '#8bd5ca', '#91d7e3', '#7dc4e4', '#8aadf4', '#b7bdf8', '#cad3f5', '#b8c0e0', '#6e738d', '#494d64', '#24273a', '#1e2030', '#181926']


function getCatColor() {
  const catppuccin = ['#f4dbd6', '#f0c6c6', '#f5bde6', '#c6a0f6', '#ed8796', '#ee99a0', '#f5a97f', '#eed49f', '#a6da95', '#8bd5ca', '#91d7e3', '#7dc4e4', '#8aadf4', '#b7bdf8', '#cad3f5', '#b8c0e0', '#6e738d', '#494d64', '#24273a', '#1e2030', '#181926']

  var item = catppuccin[Math.floor(Math.random() * catppuccin.length)];
  return item;
}


// ---------------- Features for the sketch boards -----------------------------------------------
document.getElementById("cleaner").addEventListener("click", (e) => {
  let colr_col = document.querySelectorAll(".col");
  colr_col.forEach((item) => {
    item.addEventListener("mouseover", () => {

      kolor = "";
    });
  });
});

document.getElementById("pen").addEventListener("click", (e) => {
  let colr_col = document.querySelectorAll(".col");
  colr_col.forEach((item) => {
    item.addEventListener("mouseover", () => {

      kolor = memCol;
    });
  });
});

document.getElementById("clear").addEventListener("click", (e) => {
  let colr_col = document.querySelectorAll(".col");
  colr_col.forEach((item) => {

    item.style.background = "";

  });

});


document.getElementById("catppuccin").addEventListener("click", (e) => {
  let colr_col = document.querySelectorAll(".col");
  colr_col.forEach((item) => {
    item.addEventListener("mouseover", () => {

      kolor = getCatColor()
    });
  });
});





// ---------------- grid function-----------------------------------------------
function gridGen(valSize) {
  container.innerHTML = "";
  // console.log();
  j = 0;
  for (let index = 0; index < valSize; index++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (k = 0; k < valSize; k++) {
      col = document.createElement("div");
      row.appendChild(col);
      col.classList.add("col");
      col.style.innerHTML = j;
      j++;
    }
    container.appendChild(row);
  }

  j = 500 / valSize;
  // console.log(500 / valSize);
  var A = document.querySelectorAll(".row");
  A.forEach((item) => {
    item.style.height = `${j}px`;
  });

  let colr_col = document.querySelectorAll(".col");
  colr_col.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.background = kolor;
    });
  });
}

// ---------------- grid resizer-----------------------------------------------
let size = document.getElementById("size");
// console.log(size);
valSize = "16x16";
size.addEventListener("change", (e) => {
  // console.log(e.target.value);
  valSize = e.target.value;
  gridGen(valSize);

  document.getElementById("size-val").innerHTML = "Grid Size <br> " + valSize + " X " + valSize
});
// ---------------- default colour + colour picker -----------------------------------------------
let memCol = "#cc80ff";
let kolor = "#cc80ff";
let pickr = document.getElementById("pickr");
// console.log(pickr);
pickr.addEventListener("change", (e) => {
  // console.log(e.target.value);
  kolor = `${e.target.value}`;
  memCol = kolor;
});

gridGen(16);
