

let bunav=document.getElementsByTagName("button")[0];
let buac=false;
bunav.onclick=()=>{
    let nav=document.getElementsByTagName("nav")[0];
    let div=bunav.getElementsByTagName("div");
    if(buac==false){
        nav.style.height="290px";
        div[0].setAttribute("class","x1");
        div[1].style.width="0px";
        div[2].setAttribute("class","x2");
        buac=true;
    }else{
        nav.style.height="60px";
        div[0].setAttribute("class","");
        div[1].style.width="42px";
        div[2].setAttribute("class","");
        buac=false;
    }


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}
/******************************************/
function reedmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("heden");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "قراءة المزيد"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اخفاء"; 
    moreText.style.display = "inline";
  }
}

