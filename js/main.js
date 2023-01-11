const header = document.querySelector('#header');
const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.menuMo');

const mainbottom = document.querySelector('.mainbottom');
const menu = mainbottom.querySelector('menu');
const clock = menu.querySelector('.clock');
const calendar = clock.querySelector('.date');
const time = clock.querySelector('.time');
const timeinner = time.querySelector('em');

const package = document.querySelector('#package');
const wrap = package.querySelector('.wrap');
const frame = package.querySelector('.inner');
const boxs = frame.querySelectorAll('article');
const texth1 = package.querySelector('h1');
const textp = package.querySelector('p');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// const section = document.querySelector('#package');
// const inner = section.querySelector('.inner');
// const texth1 = inner.querySelector('h1');
// const textp = inner.querySelector('p');
// const sidebar = inner.querySelector('.sidebar');

// const wrap = sidebar.querySelector('.wrap');
// const articles = wrap.querySelectorAll('article');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

const gallery = document.querySelector('#gallery');
const main = gallery.querySelector('main');
const galleryNav = gallery.querySelector('nav');
const mainh1 = main.querySelector('h1');
const mainp = main.querySelector('p');
const btns = gallery.querySelectorAll('.subbtns li');
const sections = gallery.querySelector('section');
const imgs = sections.querySelectorAll('section article');

const introduce = document.querySelector('#introduce');
const intrani = introduce.querySelector('.wrap');

const card = document.querySelector('#card');
const cardro = card.querySelector('.rotate');
const card1 = card.querySelector('.card1');
const cardafter = card.querySelector('.card1::after');
const cardboxs = card.querySelectorAll('article');
const cardh1 = card.querySelector('h1');
const cardh2 = card.querySelector('h2');
const cardp = card.querySelector('p');

const before = document.querySelector('.before');
const after = document.querySelector('.after');

after.addEventListener('click', (e) => {
	e.preventDefault();
	cardro.append(cardro.firstElementChild);
});

before.addEventListener('click', (e) => {
	e.preventDefault();
	cardro.prepend(cardro.lastElementChild);
});

btnCall.onclick = function (e) {
	e.preventDefault();
	btnCall.classList.toggle('on');
	menuMo.classList.toggle('on');
};

window.addEventListener('scroll', function () {
	let value = window.scrollY;
	console.log('scrollY', value);

	if (150 < value && value < 800) {
		texth1.style.animation = 'h1 1s linear forwards';
		textp.style.animation = 'pp 1s 1s linear forwards';
	} else if (900 < value && value < 2000) {
		intrani.style.animation = 'left 1s 1s ease-in forwards';
	} else if (2100 < value && value < 3000) {
		mainh1.style.animation = 'h1 1s ease-in forwards';
		mainp.style.animation = 'pp 1s 1s ease-in forwards';
		// galleryNav.style.animation = 'left 1s 2s ease-in forwards';
	} else if (3100 < value && value < 4000) {
		// cardh1.style.animation = 'h1 1s ease-in forwards';
		// cardh2.style.animation = 'pp 1s 1s ease-in forwards';
		// card1.style.animation = 'cardone 1s 2s ease-in forwards';
		// cardp.style.animation = 'cardp 1s 3s ease-in forwards';
		// // cardP.style.animation = 'textin 1s 2s linear forwards';
		// cardFirst.style.animation = 'cardone 1s 1s ease-in forwards';
		// cardSecond.style.animation = 'cardtwo 1s 1s ease-in forwards';
		// shadowFirst.style.animation = 'cardone 1s 1s ease-in forwards';
		// shadowSecond.style.animation = 'cardtwo 1s 1s ease-in forwards';
		// cardView.style.animation = 'cardleft 1s linear forwards';
		// cardJoin.style.animation = 'cardright 1s linear forwards';
	}
});

function getTime() {
	let now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth() + 1;
	let date = now.getDate();
	let day = now.getDay();
	let hour = now.getHours() % 12 ? now.getHours() % 12 : 12;
	let minute = now.getMinutes();
	let ampm = now.getHours() >= 12 ? 'PM' : 'AM';

	var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	if (month < 10) {
		month = '0' + month;
	}
	if (hour < 10) {
		hour = '0' + hour;
	}
	if (minute < 10) {
		minute = '0' + minute;
	}

	calendar.innerText = `${year}. ${month}. ${date}. ${week[day]}`;
	time.innerText = `${hour}:${minute} ${ampm}`;
}

getTime();
setInterval(getTime, 1000);

// let len = articles.length;
// let enableClick = true;
// let speed = 700;

btns.forEach((el, ind) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		let isOn = e.currentTarget.classList.contains('on');
		if (isOn) return;

		activation(btns, ind);
		activation(imgs, ind);
	});
});
function activation(arr, index) {
	for (let img of arr) img.classList.remove('on');
	arr[index].classList.add('on');
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

// init();

// next.addEventListener('click', (e) => {
//  e.preventDefault();
//  if (enableClick) {
//      nextSlide();
//      enableClick = false;
//  }
// });

// prev.addEventListener('click', (e) => {
//  e.preventDefault();
//  if (enableClick) {
//      prevSlide();
//      enableClick = false;
//  }
// });

// function init() {
//  wrap.style.left = '-100%';
//  wrap.prepend(wrap.lastElementChild);
//  wrap.style.width = `${100 * len}%`;
//  articles.forEach((el) => {
//      el.style.width = `${100 / len}%`;
//  });
// }

const nextSlide = () => {
	frame.append(frame.firstElementChild);
	setTimeout(() => {
		const boxs = frame.querySelectorAll('article');
		for (const el of boxs) el.classList.remove('on');
		boxs[2].classList.add('on');
	}, 500);
};

next.addEventListener('click', (e) => {
	e.preventDefault();
	nextSlide();
});

// let loopInterval = setInterval(() => {
//  next(); // 다음 슬라이드를 보여주는 함수
// }, 3000);

const prevSlide = () => {
	frame.prepend(frame.lastElementChild);
	setTimeout(() => {
		const boxs = frame.querySelectorAll('article');
		for (const el of boxs) el.classList.remove('on');
		boxs[2].classList.add('on');
	}, 500);
};

prev.addEventListener('click', (e) => {
	e.preventDefault();
	prevSlide();
});

// function init() {
//  frame.style.left = '-100%';
//  frame.prepend(frame.lastElementChild);
//  frame.style.width = `${100 * len}%`;
//  boxs.forEach((el) => {
//      el.style.width = `${100 / len}%`;
//  });
// }

// let len = boxs.length;
// let enableClick = true;
// let speed = 700;

// function nextSlide() {
//  new Anim(frame, {
//      prop: 'left',
//      value: '-10%',
//      duration: speed,
//      callback: () => {
//          frame.append(boxs.firstElementChild);
//          boxs.style.left = '-10%';
//          enableClick = true;
//      },
//  });
// }

const startAutoScrollTimer = () => {
	const handle = setInterval(() => {
		nextSlide();
	}, 3000);
	return () => clearInterval(handle);
};

let cancleAutoScroll = undefined;
let isAutoscrollActive = false;

const startAutoScroll = () => {
	if (!isAutoscrollActive) {
		isAutoscrollActive = true;
		cancleAutoScroll = startAutoScrollTimer();
	}
};

const stopAutoScroll = () => {
	if (isAutoscrollActive) {
		isAutoscrollActive = false;
		cancleAutoScroll();
	}
};

startAutoScroll();

next.addEventListener('click', () => {
	stopAutoScroll();
});

prev.addEventListener('click', () => {
	stopAutoScroll();
});

const container = document.querySelector('section#package .wrap .inner');
document.addEventListener('mousemove', ({ screenY }) => {
	const rect = container.getBoundingClientRect();

	if (rect.top < screenY && rect.bottom > screenY) {
		stopAutoScroll();
	} else {
		startAutoScroll();
	}
});

var swiper = new Swiper('.mySwiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const last = document.querySelector('#last');
const div = last.querySelector('#fullscreen');
div.addEventListener('mouseover', function () {
	div.style.height = '50vh';
});
div.addEventListener('mouseout', function () {
	div.style.height = '25vh';
});

const divtwo = last.querySelector('#fullscreentwo');
divtwo.addEventListener('mouseover', function () {
	divtwo.style.height = '50vh';
});
divtwo.addEventListener('mouseout', function () {
	divtwo.style.height = '25vh';
});

const divthree = last.querySelector('#fullscreenthree');
divthree.addEventListener('mouseover', function () {
	divthree.style.height = '50vh';
});
divthree.addEventListener('mouseout', function () {
	divthree.style.height = '25vh';
});
