
export default function Menu() {
    const header = document.getElementById('header');
    const nav = document.getElementById('nav');
    const content = document.getElementById('content');

    const renderContent = () => {
        content.classList.remove('hidden');
        content.classList.add('menu-content');

        content.textContent = 'Menu page!'

    }

    return { renderContent }
}