const header = document.querySelector("#header")
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");



const mainbottom = document.querySelector(".mainbottom");
const menu = mainbottom.querySelector("menu");
const clock = menu.querySelector(".clock");
const calendar = clock.querySelector(".date");
const time = clock.querySelector(".time");
const timeinner = time.querySelector("em");




const section = document.querySelector("#package");
const inner = section.querySelector(".inner");
const texth1 = inner.querySelector("h1");
const textp = inner.querySelector("p");
const sidebar = inner.querySelector(".sidebar")

const wrap = sidebar.querySelector(".wrap")
const articles = wrap.querySelectorAll("article");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const gallery = document.querySelector("#gallery");
const main =  gallery.querySelector("main");
const galleryNav = gallery.querySelector("nav");
const mainh1 = main.querySelector("h1");
const mainp = main.querySelector("p");
const btns = gallery.querySelectorAll(".subbtns li");
const sections = gallery.querySelector("section");
const imgs = sections.querySelectorAll("section article");

const introduce = document.querySelector("#introduce");
const intrani = introduce.querySelector(".wrap");


const card = document.querySelector("#card");
const cardinner = card.querySelector(".inner")
const cardh1 = cardinner.querySelector("h1");
const cardh2 = cardinner.querySelector("h2");
const cardP = cardinner.querySelector("p");
const cardimg = cardinner.querySelector(".cardimg");
const cardFirst = cardimg.querySelector(".card1");
const cardSecond = cardimg.querySelector(".card2");
const shadowFirst = cardimg.querySelector("::before");
const shadowSecond = cardimg.querySelector("::after");
const cardView = cardinner.querySelector(".cardview");
const cardJoin = cardinner.querySelector(".join");


btnCall.onclick = function(e){
  e.preventDefault();
  btnCall.classList.toggle("on");
  menuMo.classList.toggle('on');
}





window.addEventListener("scroll",function(){
  let value = window.scrollY
  console.log("scrollY", value);

  if( 150 < value && value < 800){
    texth1.style.animation="textin 1s linear forwards";
    textp.style.animation="textin 1s 1s linear forwards";
    sidebar.style.animation="textin 1s 2s linear forwards";
  }
  else if( 900 < value && value < 2000){
    intrani.style.animation="left 1s 1s ease-in forwards";
  }
  else if( 2100 < value && value < 3000){
    mainh1.style.animation="textin 1s ease-in forwards";
    mainp.style.animation="textin 1s 1s ease-in forwards";
    galleryNav.style.animation="left 1s 3s ease-in forwards";
}

else if( 3100 < value && value < 4000){
  cardh1.style.animation="textin 1s linear forwards";
  cardh2.style.animation="textin 1s 1s linear forwards";
  cardP.style.animation="textin 1s 2s linear forwards";

  cardFirst.style.animation="cardone 1s 1s ease-in forwards";
  cardSecond.style.animation="cardtwo 1s 1s ease-in forwards";
  shadowFirst.style.animation="cardone 1s 1s ease-in forwards";
  shadowSecond.style.animation="cardtwo 1s 1s ease-in forwards";
  cardView.style.animation="cardleft 1s linear forwards";
  cardJoin.style.animation="cardright 1s linear forwards";
}

});








function getTime(){
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let day = now.getDay();
let hour = now.getHours() % 12 ? now.getHours() % 12 : 12;
let minute = now.getMinutes();
let ampm = now.getHours() >= 12 ? 'PM' : 'AM';

var week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];


if(month < 10){
  month = '0' + month;
}
if(hour < 10){
  hour = '0' + hour ;
}
if(minute < 10){
  minute = '0' + minute;
}


calendar.innerText = `${year}. ${month}. ${date}. ${week[day]}`;
time.innerText = `${hour}:${minute} ${ampm}`;

}

getTime()
setInterval(getTime, 1000)






let len = articles.length;
let enableClick = true;
let speed = 700;

btns.forEach((el, ind) => {
  el.addEventListener("click", (e) => {
  e.preventDefault();
  let isOn = e.currentTarget.classList.contains("on");
  if (isOn) return;
  
      activation(btns, ind);
      activation(imgs, ind);
  
    })
  });
  function activation(arr, index) {
    for (let img of arr) img.classList.remove("on");
    arr[index].classList.add("on");
  }

  
 
  




// const section = document.querySelector("#sub");
// const btns = section.querySelectorAll(".subbtns li");
// const wrap = section.querySelector(".wrap");
// const article = wrap.querySelectorAll("article");


// for (let i = 0; i< btns.length; i++){
//     btns[i].addEventListener("click", () =>{
  
//          activation(btns,i);
//          activation(article,i);
//     })
// }

// function activation(list, index){
//     for(let el of list){
//         el.classList.remove("on");
//     }
//     list[index].classList.add("on");
// }




init();


next.addEventListener("click", (e) => {
  e.preventDefault();
  if (enableClick) {
    nextSlide();
    enableClick = false;
   
  }



})


prev.addEventListener("click", (e) => {
  e.preventDefault();
  if (enableClick) {
    prevSlide();
    enableClick = false;
  }

})



function init() {
    wrap.style.left = "-100%";
    wrap.prepend(wrap.lastElementChild);
    wrap.style.width = `${100 * len}%`;
    articles.forEach((el) =>
    { el.style.width = `${100 / len}%`; })
}

function nextSlide() {
  new Anim(wrap, {
    prop: 'left',
    value: "-200%",
    
    duration: speed,
    callback: () => {
        wrap.append(wrap.firstElementChild);
        wrap.style.left = "-100%";
        enableClick = true;
    }
  })
}

function prevSlide() {
  new Anim(wrap, {
    prop: 'left',
    value: "0%",
    duration: speed,
    callback: () => {
        wrap.style.left = "-100%";
        wrap.prepend(wrap.lastElementChild);
      enableClick = true;
    }
  })
}


let loopInterval = setInterval(() => {
  nextSlide(); 
}, 4000);


prev.addEventListener("click", (e) => {
  clearInterval(loopInterval);
})

prev.addEventListener("enableclick", (e) => {
  loopInterval = setInterval(() => {
    nextSlide(); 
  }, 4000);
});

next.addEventListener("click", (e) => {
  clearInterval(loopInterval);
})

next.addEventListener("enableclick", (e) => {
  loopInterval = setInterval(() => {
    nextSlide(); 
  }, 4000);
});




wrap.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});


wrap.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextSlide(); 
  }, 4000);
});