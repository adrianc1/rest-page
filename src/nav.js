import { btnAction } from './index.js';

export default function Nav() {
    const renderContent = () => {
        renderBtn();
        renderHeader();
    };

    const renderBtn = () => {
        const nav = document.getElementById('nav')
        let tabs = [ 'Home', 'Menu', 'About' ]
        for( let i = 0; i < tabs.length; i++ ){
            const createBtnEl = document.createElement('button');
            createBtnEl.setAttribute('id', `${tabs[i]}`)
            createBtnEl.innerHTML = tabs[i];
            createBtnEl.addEventListener('click', btnAction)
            nav.appendChild(createBtnEl);
        }
    };

    const renderHeader = () => {
        const headerDiv = document.getElementById('header');
        const header = document.createElement('h1')
        header.setAttribute('id', 'header-text');
        header.innerHTML = 'this is a good restaurant '
        headerDiv.appendChild(header)
    }

    return {
        renderContent,
    }
}

