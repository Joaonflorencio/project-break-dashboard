// Script linkcolect.js

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const urlInput = document.getElementById('url-input');
    const addLinkButton = document.getElementById('add-link-button');
    const linksContainer = document.getElementById('links-container');

    let savedLinks = JSON.parse(localStorage.getItem('links')) || [];

    function addLink(name, url) {
        savedLinks.push({ name, url });
        localStorage.setItem('links', JSON.stringify(savedLinks));
        renderLinks();
    }

    function deleteLink(index) {
        savedLinks.splice(index, 1);
        localStorage.setItem('links', JSON.stringify(savedLinks));
        renderLinks();
    }

    function renderLinks() {
        linksContainer.innerHTML = savedLinks.map((link, index) => {
            return `<li>
                        <a href="${link.url}" target="_blank">${link.name}</a>
                        <button onclick="deleteLink(${index})">X</button>
                    </li>`;
        }).join('');
    }

    addLinkButton.addEventListener('click', () => {
        const name = nameInput.value;
        const url = urlInput.value;
        if (name && url) {
            addLink(name, url);
            nameInput.value = '';
            urlInput.value = '';
        }
    });

    window.deleteLink = deleteLink;

    renderLinks();
});