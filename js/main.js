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
/***************** id="xspan1"**************/
function myFunction() {
    var moreText = document.getElementById("morenav");
    var licon = document.getElementById("licon");
    var xicon = document.getElementById("x-icon");
  if (moreText.style.height === "53px") {
    moreText.style.height = "210px";
      licon.style.display="none";
      xicon.style.display="block";
    
  } else {
    moreText.style.height = "53px";
      licon.style.display="block";
      xicon.style.display="none";
  }
}