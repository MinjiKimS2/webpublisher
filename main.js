const section = document.querySelector("#package");
const inner = section.querySelector(".inner");
const sidebar = inner.querySelector(".sidebar")
const wrap = sidebar.querySelector(".wrap")
const articles = wrap.querySelectorAll("article");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const first = document.querySelector("#first");
const btns = first.querySelectorAll(".subbtns li");
const sections = first.querySelector("section");
const imgs = sections.querySelectorAll("section article");



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

setInterval(()=>{
  nextSlide();
}, 4000);

