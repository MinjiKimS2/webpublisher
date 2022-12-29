const headersub = document.querySelector('#headersub');
const btnCallsub = document.querySelector('.btnCall');
const menuMosub = document.querySelector('.menuMo');

btnCall.onclick = function (e) {
	e.preventDefault();
	btnCallsub.classList.toggle('on');
	menuMosub.classList.toggle('on');
};
