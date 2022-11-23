
let hambar=document.querySelector(".hambar");

let active=document.querySelector(".fixed-container");
hambar.addEventListener("click",function(){
     active.classList.toggle("actives");

})



// BLOG PAGES JS START

let commentCenter=document.querySelector(".comment-section-center");

 let pagesBtn=document.querySelectorAll(".page-btn");
let comment=document.querySelectorAll(".comment-grid");
commentCenter.addEventListener("click",function(e){
 
     let id=e.target.dataset.id;

     if(id){

        pagesBtn.forEach(function(btn){

            btn.classList.remove("active");
            e.target.classList.add("active");
         })
    
            comment.forEach(function(comments){
                
            comments.classList.remove("active");
        
         })
         let elm=document.getElementById(id);
         elm.classList.add("active");
     }
})

