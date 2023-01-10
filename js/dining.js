const tabmenu = document.querySelector('#tabmenu');
const btns = tabmenu.querySelectorAll('.diningmenu ul li');

window.addEventListener('load', () => {
	const grid = new Isotope('section', {
		itemSelection: 'article',
		columnWidth: 'article',
		transitionDuration: '0.5s',
	});

	for (let el of btns) {
		el.addEventListener('click', (e) => {
			e.preventDefault();

			const sort = e.currentTarget.querySelector('a').getAttribute('href');

			grid.arrange({
				filter: sort,
			});

			for (let el of btns) {
				el.classList.remove('on');
			}
			e.currentTarget.classList.add('on');
		});
	}
});

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: 'p3L-T9fQ944',
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
			// 'origin': 'https://meeranblog24x7.blogspot.com/'
		},
		events: {
			onReady: onPlayerReady,
			// 'onStateChange': onPlayerStateChange
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
