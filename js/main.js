const header = document.querySelector('header');
const hframe = document.querySelector('.frame');
const bgs = hframe.querySelectorAll('.bg');
const lines = hframe.querySelectorAll('.line');
const hbtns = document.querySelectorAll('.btns span');
const hboxs = hframe.querySelectorAll('article');
const num = 10;
const changeDelay = 500;

insertDivs(0.05);
insertLine();

setTimeout(() => hboxs[0].classList.add('on'), changeDelay);
setTimeout(() => header.classList.add('on'), 4000);

hbtns.forEach((hbtn, idx) => {
	hbtn.addEventListener('click', (e) => {
		e.preventDefault();
		for (const el of hbtns) el.classList.remove('on');
		for (const el of hboxs) el.classList.remove('on');

		hbtns[idx].classList.add('on');
		setTimeout(() => hboxs[idx].classList.add('on'), changeDelay);
	});
});

function insertDivs(interval) {
	bgs.forEach((bg) => {
		let tags = '';
		for (let i = 0; i < num; i++) {
			tags += `<div style='transition-delay: ${interval * i}s; clip-path: polygon(${
				(100 / num) * i
			}% 0%, ${(100 / num) * (i + 1)}% 0%, ${(100 / num) * (i + 1)}% 100%, ${
				(100 / num) * i
			}% 100%)'></div>`;
		}
		bg.innerHTML = tags;
	});
}

function insertLine() {
	lines.forEach((line) => {
		let tags = '';
		for (let i = 0; i < num; i++)
			tags += `<div style='width: ${100 / num}%; left: ${(100 / num) * i}%'></div>`;
		line.innerHTML = tags;
	});
}

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
	} else if (3100 < value && value < 4000) {
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
	div.style.height = '70vh';
});
div.addEventListener('mouseout', function () {
	div.style.height = '25vh';
});

const divtwo = last.querySelector('#fullscreentwo');
divtwo.addEventListener('mouseover', function () {
	divtwo.style.height = '70vh';
});
divtwo.addEventListener('mouseout', function () {
	divtwo.style.height = '25vh';
});

const divthree = last.querySelector('#fullscreenthree');
divthree.addEventListener('mouseover', function () {
	divthree.style.height = '70vh';
});
divthree.addEventListener('mouseout', function () {
	divthree.style.height = '25vh';
});
