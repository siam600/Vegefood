$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})


// preloader
function loading(){
    document.getElementById('preloader').style.display='none';
}




// modal
var btns= document.querySelectorAll('.hover-icons a:first-child');
btns.forEach(function(item){
    item.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.popUp').style.display='block';
    });
});

function closePopup(){
    document.querySelector('.popUp').style.display='none';
}




// countdown
var countDownDate = new Date("August 26, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    document.getElementById("days").innerHTML=days;
    document.getElementById("hr").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;

    if(distance<0){
        clearInterval(x);
        document.getElementById("days").innerHTML=00;
        document.getElementById("hr").innerHTML=00;
        document.getElementById("min").innerHTML=00;
        document.getElementById("sec").innerHTML=00;
    }

},1000);




// slider

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})