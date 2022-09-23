setInterval(showTime, 1000);
alert("You are advised to maximize you screen by pressing 'f11' key on your keyboard for a better experience. Thanks");

function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();
