const headersub = document.querySelector('#headersub');
const btnCallsub = document.querySelector('.btnCall');
const menuMosub = document.querySelector('.menuMo');

const vidList = document.querySelector('.vidList');
const key = 'AIzaSyBI1q_8YAFrTAGj2Uz_FU_6ZRkSX_aSWQU';
const playlistId = 'PLvPf05m9ql2Z1OQckMGdrvFi77SBA2zsm';
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

btnCall.onclick = function (e) {
	e.preventDefault();
	btnCallsub.classList.toggle('on');
	menuMosub.classList.toggle('on');
};

fetch(url)
	.then((data) => {
		return data.json();
	})
	.then((json) => {
		let items = json.items;
		console.log(items);
		let result = '';

		items.map((el) => {
			let title = el.snippet.title;

			if (title.length > 30) {
				title = title.substr(0, 20) + '...';
			}

			let con = el.snippet.description;
			if (con.length > 100) {
				con = con.substr(0, 40) + '...';
			}
			let date = el.snippet.publishedAt;

			result += `
        <article>
          <a href="${el.snippet.resourceId.videoId}" class="pic">
            <img src="${el.snippet.thumbnails.medium.url}">
          </a>
          <div class="con">
          <h2>${title}</h2>
          <p>${con}</p>
        </div>

        </article>
      `;
		});

		vidList.innerHTML = result;
	});

vidList.addEventListener('click', (e) => {
	e.preventDefault();
	if (!e.target.closest('a')) return;
	const vidId = e.target.closest('article').querySelector('a').getAttribute('href');

	let pop = document.createElement('figure');
	pop.classList.add('pop');
	pop.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
      <span class="btnClose">close</span>
    `;
	vidList.append(pop);
});

vidList.addEventListener('click', (e) => {
	const pop = vidList.querySelector('.pop');
	if (pop) {
		const close = pop.querySelector('span');
		if (e.target == close) pop.remove();
	}
});
