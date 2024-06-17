export default function aboutPage() {
    const header = document.getElementById('header');
    const nav = document.getElementById('nav');
    const content = document.getElementById('content');

    const renderContent = () => {
        content.classList.remove('hidden');
        content.classList.add('about-content');

        content.textContent = 'about ussss page!'

    }
    
    return { renderContent }
}