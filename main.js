const section = document.querySelector("#sub");
const btns = section.querySelectorAll(".subbtns li");
const wrap = section.querySelector(".wrap");
const article = wrap.querySelectorAll("article");


for (let i = 0; i< btns.length; i++){
    btns[i].addEventListener("click", () =>{
    
         activation(btns,i);
         activation(article,i);
    })
}

function activation(list, index){
    for(let el of list){
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}