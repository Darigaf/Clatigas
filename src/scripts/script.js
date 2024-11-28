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
