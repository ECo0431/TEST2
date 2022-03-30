// import { yoyo } from "./test.js";

const BOXINPUT = document.getElementById("box-input");
const INPUT = document.getElementById("input");
const BUTTONINPUT = document.getElementById("button");
const BOXTXT = document.getElementById("box-txt");
let iBoxValues = 0;
let btnClose = [];
let iBtnClose = 0;
let iBtnCloseGetDom = 0;

BUTTONINPUT.addEventListener("click", () => {
  iBoxValues++;
  iBtnCloseGetDom++;
  displayBoxValues();
  btnCloseGetDom();
  console.log(iBoxValues);
  iBoxValues--;
  iBtnClose++;
});

function displayBoxValues() {
  for (let i = 0; i < iBoxValues; i++) {
    BOXTXT.innerHTML += `
      <div class="values">
        <div id="btn-close-${iBtnClose}" class="btn-close">    
          <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </div>
        <div class="box-txt-all-caracter box-txt-all-caracter"></div>
        <div class="box-txt-all-binary box-txt-all-binary"></div>
      </div>
      `;
  }
}

function btnCloseGetDom() {
  for (let i = 0; i < iBtnCloseGetDom; i++) {
    btnClose[iBtnClose] = document.getElementById(`btn-close-${iBtnClose}`);
    btnClose[iBtnClose].addEventListener("click", () => {
      console.log("ok" + iBtnClose);
    });
  }
  console.log(btnClose);
}
