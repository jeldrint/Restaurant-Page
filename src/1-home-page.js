import Background from './meryenda.jpg';

const homePage = () => {
    const container = document.querySelector('#content');
    homePageHeader();
}

const homePageHeader = () => {
    const container = document.querySelector('#content');
    const header = document.createElement('div');
    header.className = 'page-header';

    const textHeader = document.createElement('span');
    textHeader.className = 'text-header';
    textHeader.innerText = "Meryenda ni Mami";

    const menuHeader = document.createElement('ul');
    menuHeader.className = 'menu-header';
    const menuItems = document.createElement('li');
    menuItems.cr

    container.appendChild(header);
    header.appendChild(textHeader);
}
export default homePage;