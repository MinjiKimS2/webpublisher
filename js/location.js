const headersub = document.querySelector('#headersub');
const btnCallsub = document.querySelector('.btnCall');
const menuMosub = document.querySelector('.menuMo');

btnCall.onclick = function (e) {
	e.preventDefault();
	btnCallsub.classList.toggle('on');
	menuMosub.classList.toggle('on');
};

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	mapOption = {
		center: new kakao.maps.LatLng(37.5039018, 127.0047481), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

function setCenter() {
	// 이동할 위도 경도 위치를 생성합니다
	var moveLatLon = new kakao.maps.LatLng(37.5039018, 127.0047481);

	// 지도 중심을 이동 시킵니다
	map.setCenter(moveLatLon);
}

function panTo() {
	// 이동할 위도 경도 위치를 생성합니다
	var moveLatLon = new kakao.maps.LatLng(37.5039018, 127.0047481);

	// 지도 중심을 부드럽게 이동시킵니다
	// 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	map.panTo(moveLatLon);
}
// // 마커가 표시될 위치입니다
// var markerPosition  = new kakao.maps.LatLng(37.5039018, 127.0047481);

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);

var imageSrc = 'img/markup.png', // 마커이미지의 주소입니다
	imageSize = new kakao.maps.Size(100, 100), // 마커이미지의 크기입니다
	imageOption = { offset: new kakao.maps.Point(50, 50) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
	markerPosition = new kakao.maps.LatLng(37.5039018, 127.0047481); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
	position: markerPosition,
	image: markerImage, // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
