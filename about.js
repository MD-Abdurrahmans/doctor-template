


let hambar=document.querySelector(".hambar");

let active=document.querySelector(".fixed-container");
hambar.addEventListener("click",function(){
     active.classList.toggle("actives");

})










let questions= document.querySelectorAll(".questions");

  questions.forEach(function(question){
 const btn=  question.querySelector(".single-button");

//  console.log(btn);
 btn.addEventListener("click",function(){

    questions.forEach(function(item){

        if(item!==question){
            item.classList.remove("show-text");
        }
     })



    question.classList.toggle("show-text");
 })  


  })

