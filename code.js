



//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





// SHOW AND HIDE






function hideShowDiv1(){
  let div1=document.getElementById("categori1");
  let div2=document.getElementById("categori2");
  let div3=document.getElementById("categori3");

 
    div1.style.display='block';
    div2.style.display='none';
    div3.style.display='none';
  

}






function hideShowDiv2(){
  let div1=document.getElementById("categori1");
  let div2=document.getElementById("categori2");
  let div3=document.getElementById("categori3");
  
 
    div2.style.display='block';
    div1.style.display='none';
    div3.style.display='none';

}






function hideShowDiv3(){
  let div1=document.getElementById("categori1");
  let div2=document.getElementById("categori2");
  let div3=document.getElementById("categori3");
  
 
    div3.style.display='block';
    div1.style.display='none';
    div2.style.display='none';
 

}





function hideShowDiv4(){
  let div1=document.getElementById("categori1");
  let div2=document.getElementById("categori2");
  let div3=document.getElementById("categori3");
  
 
    div3.style.display='block';
    div1.style.display='block';
    div2.style.display='block';
 

}





