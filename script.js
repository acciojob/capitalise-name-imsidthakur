//your JS code here. If required.
const name = document.getElementById("fname");

name.addEventListner("blur",(e)=>{
	const text = e.target.textContent;
	 e.target.textContent = text.toUpperCase();
})
