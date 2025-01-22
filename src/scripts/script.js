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


search_bar.addEventListener('click', (event) => {
    event.stopPropagation();
    tags_bar.classList.toggle('show'); // Alterna a classe "show" no menu

});
document.addEventListener('click', (event) => {
	if (!tags_bar.contains(event.target) && !search_bar.contains(event.targetr)) {
		tags_bar.classList.remove('show'); // Remove a classe "show" para ocultar a div
	}
});
// Seleciona os elementos necessários
const tagsInputContainer = document.getElementById('tags-input'); // O contêiner da barra de pesquisa
const selectedTagsContainer = document.getElementById('selected-tags'); // Contêiner das tags
const tags = document.querySelectorAll('.tags_bar .tag'); // Todas as tags

// Função para criar uma tag dentro do campo de pesquisa
function addTagToSearchBar(tagText) {
    // Verifica se a tag já foi adicionada
    const existingTags = [...selectedTagsContainer.querySelectorAll('.selected-tag')];
    if (existingTags.some(tag => tag.textContent.trim() === tagText)) {
        return; // Evita tags duplicadas
    }

    // Cria o elemento da tag
    const tagElement = document.createElement('div');
    tagElement.className = 'selected-tag'; // Aplica a classe CSS
    tagElement.innerHTML = `
        ${tagText}
        <span class="remove-tag">&times;</span>
    `;

    // Adiciona o evento para remover a tag ao clicar no "x"
    tagElement.querySelector('.remove-tag').addEventListener('click', () => {
        tagElement.remove(); // Remove a tag
    });

    // Adiciona a tag ao contêiner
    selectedTagsContainer.appendChild(tagElement);
}

// Adiciona o evento de clique em cada tag
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        addTagToSearchBar(tag.textContent); // Adiciona a tag selecionada
    });
});
