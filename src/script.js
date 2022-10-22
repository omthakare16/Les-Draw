const container = document.getElementById("container");

// ---------------- Features for the sketch boards -----------------------------------------------
document.getElementById("cleaner").addEventListener("click", (e) => {
  kolor = "";
});

document.getElementById("pen").addEventListener("click", (e) => {
  kolor = memCol;
});

document.getElementById("clear").addEventListener("click", (e) => {
  let colr_col = document.querySelectorAll(".col");
  colr_col.forEach((item) => {

    item.style.background = "";

  });

});


// ---------------- grid function-----------------------------------------------
function gridGen(valSize) {
  container.innerHTML = "";
  // console.log();
  for (let index = 0; index < valSize; index++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (k = 0; k < valSize; k++) {
      col = document.createElement("div");
      row.appendChild(col);
      col.classList.add("col");
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
size.addEventListener("change", (e) => {
  // console.log(e.target.value);
  valSize = e.target.value;
  gridGen(valSize);
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
