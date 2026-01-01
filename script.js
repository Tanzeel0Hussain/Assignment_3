function updateDateTime() {
	const now = new Date();
	const date = document.getElementById("date");
	if (date) date.innerText = now.toDateString();
	const time = document.querySelector(".time-text");
	if (time) time.innerText = now.toLocaleTimeString();
}
document.addEventListener("DOMContentLoaded", () => {
	updateDateTime();
	setInterval(updateDateTime, 1000);
});
