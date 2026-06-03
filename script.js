window.addEventListener("scroll",()=>{

let nav=document.getElementById("navbar");

if(window.scrollY>50){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});

document.getElementById("darkMode")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

document.getElementById("contactForm")
.addEventListener("submit",(e)=>{

let name=document.getElementById("name").value;

if(name===""){
alert("Please enter your name");
e.preventDefault();
}

});

let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

};

topBtn.onclick=function(){

window.scrollTo({
top:0,
behavior:"smooth"
});
let countDownDate =
new Date("July 31, 2026 23:59:59").getTime();

let timer = setInterval(function(){

let now = new Date().getTime();

let distance = countDownDate - now;

let days =
Math.floor(distance/(1000*60*60*24));

document.getElementById("timer").innerHTML =
days + " Days Remaining";

if(distance < 0){
clearInterval(timer);
document.getElementById("timer").innerHTML =
"Offer Expired";
}

},1000);

};