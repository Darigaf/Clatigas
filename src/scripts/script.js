function goto_end(){
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: "smooth"
	});
}
const hamburguerButton = document.getElementById('hamburguer_button');
const hamburguerMenu = document.getElementById('hamburguer_menu');


hamburguerButton.addEventListener('click', () => {
	event.stopPropagation();
	hamburguerMenu.classList.toggle('show'); // Alterna a classe "show" no menu

});
document.addEventListener('click', (event) => {
	if (!hamburguerButton.contains(event.target) && !hamburguerMenu.contains(event.target)){
		hamburguerMenu.classList.remove('show');
	}
});

const search_bar = document.getElementById('search_bar');
const tags_bar= document.getElementById('tags_bar');


search_bar.addEventListener('click', (event) => {
    event.stopPropagation();
    tags_bar.classList.add('show'); // Alterna a classe "show" no menu

});
document.addEventListener('click', (event) => {
	if (!tags_bar.contains(event.target) && !search_bar.contains(event.target)) {
		tags_bar.classList.remove('show'); // Remove a classe "show" para ocultar a div
	}
});
