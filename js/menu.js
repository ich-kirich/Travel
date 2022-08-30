let width
var onresize = function() {
  width = document.body.clientWidth;
}
window.addEventListener("resize", onresize);
onresize();

document.getElementById('nav-toggle').addEventListener("click",()=> toggleMenu());
document.querySelector('nav .close').addEventListener("click",()=> toggleMenu());
document.querySelector('.big-shadow').addEventListener("click",()=> toggleMenu());
let navLinkList = document.querySelectorAll('nav a');

for (let i = 0; i< navLinkList.length; i++){
  navLinkList[i].addEventListener("click",()=> toggleMenu());
}

function toggleMenu(){
  if(width<=390){
    document.querySelector('body').classList.toggle('active-menu')
  }
}