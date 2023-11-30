setInterval(() => {
    losangeles();
    sydney();
    tokyo();
    paris();
}, 1000);

function losangeles()
{
let losangeles = document.querySelector("#losangeles");
let losangelesDate = losangeles.querySelector(".date");
let losangelesTime = document.querySelector(".time");
let Ltime = moment().tz("America/Los_Angeles");
losangelesDate.innerHTML = moment().format("Do MMMM YYYY");
losangelesTime.innerHTML = `${Ltime.format("hh:mm:ss[<small>]A[</small>]")}`;
}
function sydney()
{
let sydney = document.querySelector("#sydney");
let sydneyDate = sydney.querySelector(".date");
let sydneyTime = sydney.querySelector(".time");
let Stime = moment().tz("Australia/Sydney");
sydneyDate.innerHTML = moment().format("Do MMMM YYYY");
sydneyTime.innerHTML = `${Stime.format("hh:mm:ss[<small>]A[</small>]")}`;
}
function tokyo()
{
let tokyo = document.querySelector("#tokyo");
let tokyoDate = tokyo.querySelector(".date");
let tokyoTime = tokyo.querySelector(".time");
let Ttime = moment().tz("Asia/Tokyo");
tokyoDate.innerHTML = moment().format("Do MMMM YYYY");
tokyoTime.innerHTML = `${Ttime.format("hh:mm:ss[<small>]A[</small>]")}`;
}
function paris()
{
let paris = document.querySelector("#paris");
let parisDate = paris.querySelector(".date");
let parisTime = paris.querySelector(".time");
let Ptime = moment().tz("Europe/Paris");
parisDate.innerHTML = moment().format("Do MMMM YYYY");
parisTime.innerHTML = `${Ptime.format("hh:mm:ss[<small>]A[</small>]")}`;
}