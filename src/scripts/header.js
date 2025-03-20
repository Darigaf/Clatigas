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
const tags_list= document.getElementById('tags_list');


search_bar.addEventListener('click', (event) => {
    event.stopPropagation();
    tags_list.classList.add('show'); // Alterna a classe "show" no menu

});
document.addEventListener('click', (event) => {
	if (!tags_list.contains(event.target) && !search_bar.contains(event.target)) {
		tags_list.classList.remove('show'); // Remove a classe "show" para ocultar a div
	} });
const tags = [];

function add_tag(tagText, tagClass) {

    // Check if the tagText is not empty and does not already exist in the tags array

    if (tagText.trim() !== '' && !tags.some(tag => tag.text === tagText)) {

        tags.push({ text: tagText, class: tagClass });

        update_tags_display();

    }

}

// Update the tags display inside the search bar and adjust the padding of the input
function update_tags_display() {
    const tags_container = document.getElementById('tags_container');
    const search_input = document.getElementById('search_input');

    // Clear the container first
    tags_container.innerHTML = '';

    // Add each tag as a non-editable span inside the input field
    tags.forEach(tag => {
        const tag_element = document.createElement('span');
        tag_element.className = 'tag';
	if(tag.class){
		tag_element.classList.add(tag.class);
	}
        tag_element.textContent = tag.text;
        // Attach click event to each tag to remove it
        tag_element.addEventListener('click', () => {
            remove_tag(tag); // Remove tag when clicked
        });
        tags_container.appendChild(tag_element);
    });

    // Dynamically calculate the left padding based on the number of tags
    const totalTagWidth = tags.reduce((acc, tag) => acc + (tag.text.length * 8 + 20), 0);
    search_input.style.paddingLeft = (totalTagWidth + 20) + "px";
}

// Remove the tag from the list
function remove_tag(tag) {
    const index = tags.findIndex(t => t.text === tag.text);
    if (index > -1) {
        tags.splice(index, 1);
        update_tags_display();
    }
}

// Handle the form submission
document.getElementById('search_form').addEventListener('submit', function (event) {
    const search_input = document.getElementById('search_input');

    // Append tags to the input value before submitting
    if (tags.length > 0) {
        search_input.value = tags.map(tag => tag.text).join(', ') +
            (search_input.value.trim() ? ', ' + search_input.value.trim() : '');
    }
});

