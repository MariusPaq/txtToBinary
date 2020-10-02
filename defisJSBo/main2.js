const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");

myBtn.addEventListener("click",function(){
  headsOrTails();
})

function headsOrTails(){
  if ( Math.floor(Math.random() * 2) == 0 ){
    result.innerHTML = "tail";
    console.log('tail');
  } else {
    result.innerHTML = "head";
    console.log('head');
  }
}
