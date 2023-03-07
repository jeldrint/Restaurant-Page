import homePage from './1-home-page.js';
import {homePageHeader,homePageFooter,homePageBody} from './1-home-page.js'
import menu from './2-menu.js'
import './style.css'

const mainPage = () =>{
    homePage();
    const tabSelector = document.querySelector('.menu-header');
    const body = document.querySelector('.page-body');
    
    tabSelector.addEventListener('click', e =>{
        switch (e.target){
            case tabSelector.children[0]:
                remover();
                homePageBody();
                break;
            case tabSelector.children[1]:
                remover();
                //menu();
                break;
            case tabSelector.children[2]:
                console.log('Lets go contact');
                break;
            default: e.preventDefault();
        }
    })
    
    const remover = () =>{
        while (body.hasChildNodes()){
            body.removeChild(body.firstChild);
        }
    }
}

mainPage();