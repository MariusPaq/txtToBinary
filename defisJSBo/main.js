const myBtn = document.getElementById('myBtn') ;
const cntClic = document.getElementById('cntClic');
var nbClic = 0;
console.log('you clicked '+nbClic+' times');
myBtn.addEventListener("click",function(){
  nbClic += 1;
  console.log('you clicked '+nbClic+' times');
})
