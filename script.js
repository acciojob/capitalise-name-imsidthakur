const name = document.getElementById("fname");

name.addEventListener("blur",(e)=>{
	const text = e.target.value;
	e.target.value = text.toUpperCase();
})