let a = 0, b = 1000;
let clicks = 0;

let h1Title = document.querySelector("#h1Title");
let btnStart = document.querySelector("#btnStart");
let playBox = document.querySelector("#playBox");
let btnLess = document.querySelector("#btnLess");
let btnGreater = document.querySelector("#btnGreater");

btnStart.addEventListener("click", function(){
	btnStart.style.display = "none";
	playBox.style.display = "block";
	h1Title.innerHTML = parseInt((a + b) / 2);
})
btnLess.addEventListener("click", function(){
	b = parseInt((a + b) / 2);
	h1Title.innerHTML = parseInt((a + b) / 2);

})
btnGreater.addEventListener("click", function(){
	a = parseInt((a + b) / 2);
	h1Title.innerHTML = parseInt((a + b) / 2);
})

function incrementClick() {
	updateDisplay(++clicks);
}

function reset() {
	clicks = 0;
	updateDisplay(clicks);
	btnStart.style.display = "block";
	playBox.style.display = "none";
	h1Title.innerText = 'Загадай любое число от 1 до 100';
	a = 0;
	b =1000;
}

function updateDisplay(val) {
	document.getElementById("counter-label").innerHTML = val;
}