//your JS code here. If required.

const input = document.getElementById("fname");

input.addEventListner("change",()=>{
	const text = input.textContent;
	input.textContent = text.toUpperCase();
})
