


// const supper = new Supper('.supper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });




// HOME PAGES--WHAT WE DO JS



//  const menu=[




//   {
//     id:1,
//     categories:"Service #1",
//     name:"KONKAL STATUE",
//     img:"images/1.jpg",
//     des:`Cras velit ligula, sodaleut enim quis, venenatis feugiat ante. lus facilisis nisl. Praesent aliquet
 
//     sollicitudin leo, eu oare nibh sodales et. Vestibulum blandit,eu oare nibh sodales et`,
//   },

  
//   {
//     id:2,
//     categories:"Service #2",
//     name:"KONKAL manking",
//     img:"images/1.jpg",
//     des:`Cras velit ligula, sodaleut enim quis, venenatis feugiat ante. lus facilisis nisl. Praesent aliquet
 
//     sollicitudin leo, eu oare nibh sodales et. Vestibulum blandit,eu oare nibh sodales et`,
//   },


//   {
//     id:3,
//     categories:"Service #3",
//     name:"supperk STATUE",
//     img:"images/1.jpg",
//     des:`Cras velit ligula, sodaleut enim quis, venenatis feugiat ante. lus facilisis nisl. Praesent aliquet
 
//     sollicitudin leo, eu oare nibh sodales et. Vestibulum blandit,eu oare nibh sodales et`,
//   },

//  ];


let preload=document.getElementById("preload");


window.addEventListener( "load",function(){

  preload.style.display="none";
})

let hambar=document.querySelector(".hambar");

let active=document.querySelector(".fixed-container");
hambar.addEventListener("click",function(){
     active.classList.toggle("actives");

})







let sectionCenter=document.querySelector(".section-center");
let filterBtn= document.querySelectorAll(".filter-btn");
let hide =document.querySelectorAll(".hide");



sectionCenter.addEventListener("click",function(e){

   let id=e.target.dataset.id;
  if(id){

    filterBtn.forEach(function(btn){

      btn.classList.remove("active");
      e.target.classList.add("active");
    })

    hide.forEach(function(hides){

      hides.classList.remove("active");
  
     
    })
      let elm=document.getElementById(id);
    elm.classList.add("active");

  }
})














