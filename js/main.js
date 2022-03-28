let form = document.querySelector('#validation');

let btn = document.querySelector('#botao');

let image = document.querySelector('#prin');

btn.onclick = function(){

	if(form.className == ""){
		form.className = "was-validated";
	} else {
		form.className = "";
	}
}

tamanho();

window.addEventListener('resize', tamanho);

function tamanho(){

	let wind = window.innerWidth;

	if (wind <= 767){
		image.setAttribute('src', 'images/hero-mobile.jpg');
	} else {
		image.setAttribute('src', 'images/hero-desktop.jpg');
	}
}