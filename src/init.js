import Nav from './nav.js'

export default function mainPage() {
    const content = document.getElementById('content');
    content.classList.remove('hidden');
    content.classList.add('home-content');

    content.textContent = 'home page!'
    
}
Nav().renderContent();