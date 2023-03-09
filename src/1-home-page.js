import Icon from './mama-pic.jpg';

const homePage = () => {
    homePageHeader();
    homePageBody();
    homePageFooter();
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

    const menuHeader = document.createElement('div');
    menuHeader.className = 'menu-header';
    header.appendChild(menuHeader);
    
    for (let i=0; i<3; i++){
        let x = document.createElement('button')
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

const homePageFooter = () => {
    const container = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.className = 'page-footer';
    footer.innerText = 'Copyright \u00A9 2023 jeldrint'
    footer.style.textAlign = 'center'
    container.appendChild(footer)
}


const homePageBody = () => {
    const container = document.querySelector('#content');
    let body = "";
    if(container.children[1] == undefined){
        body = document.createElement('div');
        body.className = 'page-body';
        container.appendChild(body);    
    }else{
        body = document.querySelector('.page-body');
    }

    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.alignItems = 'center';
    body.style.minWidth = '500px';
    body.style.maxWidth = '800px';

    const upperBodyText = document.createElement('div');
    upperBodyText.className = 'body-text';
    const lowerBodyText = document.createElement('div');
    lowerBodyText.className = 'body-text';

    upperBodyText.innerText = "Serving the most delicious meryenda here in Olongapo City!"
    body.appendChild(upperBodyText);

    const mamaPic = new Image();
    mamaPic.src = Icon;
    body.appendChild(mamaPic);
    mamaPic.className = 'mami-pic';

    lowerBodyText.innerText = "Feel free to explore our website for our Menu and Contact. \n Serving Olongapo City since 2023."
    body.appendChild(lowerBodyText);
}

export default homePage;
export {homePageHeader,homePageFooter,homePageBody};