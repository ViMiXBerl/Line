let array = [];
const submit = document.querySelector("#submit");
const firstValue = document.querySelector("#firstValue");
const lastValue = document.querySelector("#lastValue");
const form = document.querySelector("#form");
let result = "";

submit.addEventListener("click", (event) => {
  event.preventDefault();

  array.push({ firstValue: firstValue.value, lastValue: lastValue.value });
  result = (lastValue.value - firstValue.value) / 100;

  console.log(array);
  console.log(result);

  drewBox();
  form.reset();
});

const drewBox = () => {
  const parent = document.querySelector("#parent");

  let childWidth = result * parent.offsetWidth;

  parent.innerHTML = "";

  parent.innerHTML += `<div class = "child" style="width:${childWidth}px; height:100px; background-color: blueviolet;position: absolute; margin-left:${childWidth}px"></div> `;
  const child = document.querySelector(".child");
  console.log(parent.offsetWidth);
  console.log(childWidth);

  console.log(child.offsetLeft);
};
