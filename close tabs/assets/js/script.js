const btnModals = document.getElementsByClassName('btnModal');
const modals = document.getElementsByClassName('modal');
const x = document.getElementsByTagName("span");

function closeAll(){
  for(let v = 0 ; v < modals.length ; v++){
    modals[v].classList.add("displayNone");
  }
}

for(let i = 0 ; i < x.length ; i++){
  x[i].addEventListener("click", closeAll)
}

for(let i = 0 ; i < btnModals.length ; i++){

  btnModals[i].addEventListener('click', function(){

    if(modals[i].classList.contains("displayNone") == false){
      closeAll();
    }else{
      closeAll();
      modals[i].classList.toggle("displayNone");
    }
  })
} 






   
    
    