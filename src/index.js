import './style.css';
import Menu from './menu.js';
import aboutPage from './about.js';
import mainPage from './init.js';

mainPage();

export function btnAction(e) {
    console.log(e.target.id);
    let currentBtnId = e.target.id;

    if ( currentBtnId == "Menu") {
        clear();
        Menu().renderContent()
    }

    else if (currentBtnId == "Home") {
        clear();
        mainPage()
    }

    else if ( currentBtnId == "About" ) {
        clear();
        aboutPage().renderContent();
    }
}

function clear() {
    const content = document.getElementById('content');
    content.removeAttribute('class');
    content.classList.add('hidden');
}