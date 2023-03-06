import Background from './meryenda.jpg';

const homePage = () => {
    homePageHeader();
}

const homePageHeader = () => {
    const container = document.querySelector('#content');
    const header = document.createElement('div');
    header.className = 'page-header';
    container.appendChild(header);

    const textHeader = document.createElement('span');
    textHeader.className = 'text-header';
    textHeader.innerText = "Meryenda ni Mami";
    header.appendChild(textHeader);

    const menuHeader = document.createElement('ul');
    menuHeader.className = 'menu-header';
    header.appendChild(menuHeader);
    
    for (let i=0; i<3; i++){
        let x = document.createElement('li')
        menuHeader.appendChild(x);
        
        switch (i){
            case 0: menuHeader.children[i].innerText = 'Home';
                    break;
            case 1: menuHeader.children[i].innerText = 'Menu';
                    break;
            case 2: menuHeader.children[i].innerText = 'Contact';
                    break;
        }
    }
}
export default homePage;