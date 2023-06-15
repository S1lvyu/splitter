"use strict";
const billInput = document.getElementById("bill-input");
const selectTips = document.querySelector(".select-tips");
const peopleNumber = document.getElementById("no-of-people");
const buttons = selectTips.querySelectorAll("button");
const tipsInput = selectTips.querySelector("input");
const tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total");
const resetBtn = document.querySelector(".reset-button");

let billValue = 0;
let tipsValue = 0;
let peopleNumberInput = 0;
tipAmount.textContent = "$0";
total.textContent = "$0";

billInput.addEventListener("input", (event) => {
  billValue = event.target.value;

  updateTipAmount();
  updateTotal();
});
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    tipsValue = parseFloat(event.target.textContent);
    updateTipAmount();
    updateTotal();
  });
});

peopleNumber.addEventListener("input", (event) => {
  peopleNumberInput = event.currentTarget.value;
  updateTipAmount();
  updateTotal();
});
tipsInput.addEventListener("input", (event) => {
  tipsValue = event.currentTarget.value;
  updateTipAmount();
  updateTotal();
});

function updateTipAmount() {
  let calculatedTipAmount = 0;
  if (billValue !== 0 && peopleNumberInput !== 0) {
    calculatedTipAmount = (
      (billValue * (tipsValue / 100)) /
      peopleNumberInput
    ).toFixed(2);

    tipAmount.textContent = `$${calculatedTipAmount}`;
  }
}
function updateTotal() {
  let calculatedTipAmount = 0;
  let calculatedTotal = 0;
  if (billValue !== 0 && peopleNumberInput !== 0) {
    calculatedTipAmount = (billValue * (tipsValue / 100)) / peopleNumberInput;
    calculatedTotal = (
      billValue / peopleNumberInput +
      calculatedTipAmount
    ).toFixed(2);
    total.textContent = `$${calculatedTotal}`;
  }
}

function resetSplitter() {
  billValue = 0;
  peopleNumberInput = 1;
  billInput.value = "";
  peopleNumber.value = "1";
  tipAmount.textContent = "$0";
  total.textContent = "$0";
}
resetBtn.addEventListener("click", resetSplitter);
updateTipAmount();
updateTotal();
