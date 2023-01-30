const headersub = document.querySelector('#headersub');
const btnCallsub = document.querySelector('.btnCall');
const menuMosub = document.querySelector('.menuMo');

const vidList = document.querySelector('.vidList');
const key = 'AIzaSyBI1q_8YAFrTAGj2Uz_FU_6ZRkSX_aSWQU';
const playlistId = 'PLvPf05m9ql2Z1OQckMGdrvFi77SBA2zsm';
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

btnCallsub.onclick = function (e) {
	e.preventDefault();
	btnCallsub.classList.toggle('on');
	menuMosub.classList.toggle('on');
};

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: 'RpMNyUblQKY',
		height: '700',
		width: '1500',
		playerVars: {
			autoplay: 1,
			rel: 0,
			showinfo: 0,
			modestbranding: 1,
			playsinline: 1,
			showinfo: 0,
			rel: 0,
			controls: 0,
			color: 'white',
			loop: 1,
			mute: 1,
		},
		events: {
			onReady: onPlayerReady,
		},
	});
}
function onPlayerReady(event) {
	player.playVideo();
	player.mute();
}
var done = false;
function onPlayerStateChange(event) {}
function stopVideo() {
	player.stopVideo();
}

var swiper = new Swiper('.mySwiper', {
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
