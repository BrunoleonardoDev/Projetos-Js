const cardName = document.getElementById("wName");
const nameInput = document.getElementById("nameCard");

const cardNumber = document.getElementById("wNumber");
const numberInput = document.getElementById("numCard");

const cardMonth = document.getElementById("wMonth");
const monthInput = document.getElementById("mmCard");

const cardYear = document.getElementById("wYear");
const yearInput = document.getElementById("yyCard");

const cardCvv = document.getElementById("wCVV");
const cvvInput = document.getElementById("cvvCard");

const submitBtn = document.getElementById("submit_btn");
const form = document.querySelector("form");

function setCardName(e) {
    cardName.innerHTML = e.target.value;
}
function setCardNumber(e) {
    cardNumber.innerText = e.target.value;
}
function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
}
function setCardYear(e) {
    cardYear.innerText = e.target.value;
}

function setCardCvv(e) {
    cardCvv.innerText = e.target.value;
}
/*function format(s) { 
    return s.toString().replace(/\d{4}(?=.)/g, "$&");
}*/

cardName.addEventListener("keyup",setCardName);
cardNumber.addEventListener("keyup",setCardNumber);
cardMonth.addEventListener("keyup",setCardMonth);
cardYear.addEventListener("keyup",setCardYear);
cardCvv.addEventListener("keyup",setCardCvv);
submitBtn.addEventListener("click",handleSubmit)