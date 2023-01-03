const headersub = document.querySelector('#headersub');
const btnCallsub = document.querySelector('.btnCall');
const menuMosub = document.querySelector('.menuMo');

btnCall.onclick = function (e) {
	e.preventDefault();
	btnCallsub.classList.toggle('on');
	menuMosub.classList.toggle('on');
};

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '700',
		width: '1500',
		videoId: 'BelbfOHOojs',
		autoplay: true,
		controls: 0,
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange,
		},
	});
}

// function onYouTubeIframeAPIReady() {
// 	var player;
// 	player = new YT.Player('player', {
// 		videoId: 'BelbfOHOojs',
// 		playerVars: { autoplay: 1, controls: 0 },
// 		events: {
// 			onReady: onPlayerReady,
// 			onPlaybackQualityChange: onPlayerPlaybackQualityChange,
// 			onStateChange: onPlayerStateChange,
// 			onError: onPlayerError,
// 		},
// 	});
// }

function onPlayerReady(event) {
	event.target.setVolume(0);
	event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {}
function stopVideo() {
	player.stopVideo();
}
