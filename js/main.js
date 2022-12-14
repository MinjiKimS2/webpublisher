const mainbottom = document.querySelector(".mainbottom");
const menu = mainbottom.querySelector("menu");
const clock = menu.querySelector(".clock");
const calendar = clock.querySelector(".date");
const time = clock.querySelector(".time");
const timeinner = time.querySelector("em");

const section = document.querySelector("#package");
const inner = section.querySelector(".inner");
const sidebar = inner.querySelector(".sidebar")
const wrap = sidebar.querySelector(".wrap")
const articles = wrap.querySelectorAll("article");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const gallery = document.querySelector("#gallery");
const btns = gallery.querySelectorAll(".subbtns li");
const sections = gallery.querySelector("section");
const imgs = sections.querySelectorAll("section article");







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