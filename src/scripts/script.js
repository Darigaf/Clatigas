function goto_end(){
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: "smooth"
	});
}
const hamburguerButton = document.getElementById('hamburguer_button');

const hamburguerMenu = document.getElementById('hamburguer_menu');


hamburguerButton.addEventListener('click', () => {

    hamburguerMenu.classList.toggle('show'); // Alterna a classe "show" no menu

});

const search_bar = document.getElementById('search_bar');

const tags_bar= document.getElementById('tags_bar');


search_bar.addEventListener('click', () => {

    tags_bar.classList.toggle('show'); // Alterna a classe "show" no menu

});
