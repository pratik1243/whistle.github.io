
function visible(){
document.getElementById('menu').style.display="block";
document.getElementsByClassName("cancel")[0].style.display="block";
document.getElementsByClassName("menu-btn")[0].style.display="none";

}


function hide(){
  document.getElementById('menu').style.display="none";
  document.getElementsByClassName("cancel")[0].style.display="none";
  document.getElementsByClassName("menu-btn")[0].style.display="block";
}


function show1(){

let inp=document.getElementById('input');


  if(inp.style.display="none"){
inp.style.display="block"; 
  }
else{
inp.style.visibility="hidden"; 
}




}
 

        





