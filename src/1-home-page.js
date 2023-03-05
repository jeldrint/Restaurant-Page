import Background from './meryenda.jpg';

const homePage = () => {
    const container = document.querySelector('#content');
    homePageHeader();
}

const homePageHeader = () => {
    const container = document.querySelector('#content');
    const header = document.createElement('div');
    const textHeader = document.createElement('span');

    
    textHeader.innerText = "Meryenda ni Mami";
    header.style.backgroundColor = 'rgba(200,200,200,0.8)';
    textHeader.style.color = 'goldenrod';
    textHeader.style.fontSize = '54px';
    header.style.textAlign = 'center';
    textHeader.style.fontFamily = 'Pacifico, sans-serif'

    header.style.height = '200px'
    container.appendChild(header);
    header.appendChild(textHeader);

}
export default homePage;