const headersub = document.querySelector('#headersub');
const btnCallsub = document.querySelector('.btnCall');
const menuMosub = document.querySelector('.menuMo');

btnCall.onclick = function (e) {
	e.preventDefault();
	btnCallsub.classList.toggle('on');
	menuMosub.classList.toggle('on');
};

let observer = new IntersectionObserver((e) => {
	e.forEach((박스) => {
		박스.target.style.opacity = 1;
	});
});

const h1 = document.querySelector('h1');
observer.observe(h1[0]); //html요소 화면에 등장하는지 감시
