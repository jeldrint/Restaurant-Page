import spag from './meryenda/spag.png'
import pancitCanton from './meryenda/pancit-canton.png'
import pancitBihon from './meryenda/pancit-bihon.png'
import friedChicken from './meryenda/fried-chicken.png'
import burger from './meryenda/burger.png'
import biryani from './meryenda/biryani.png'

const Menu = () => {
    const body = document.querySelector('.page-body');
    body.style.minWidth = '800px';
    body.style.maxWidth = '1200px';
    body.style.display = 'grid';
    body.style.gridTemplateColumns = '1fr 1fr';

    for (let i =0; i< 6; i++){
        let items = document.createElement('div');
        body.appendChild(items);
        items.setAttribute('id',`item-${i+1}`);
        items.className = 'menu-item';

        const meryenda = new Image();
        meryenda.setAttribute('id',`meryenda-${i+1}`)
        meryenda.className = 'meryenda';

        const meryendaText = document.createElement('div');
        meryendaText.setAttribute('class','meryenda-text')
        const meryendaTextHeader = document.createElement('div');
        meryendaTextHeader.setAttribute('class','meryenda-text-header')
        const meryendaTextBody = document.createElement('div');
        meryendaTextBody.setAttribute('class','meryenda-text-body')
        const meryendaTextPrice = document.createElement('div');
        meryendaTextPrice.setAttribute('class','meryenda-text-price')
        
        switch (i){
            case 0:
                meryenda.src = burger;
                meryendaTextHeader.innerText = "Classic Hamburger"
                meryendaTextBody.innerText = "Mas masarap pa to kesa sa Yumburger."
                meryendaTextPrice.innerText = "Php150 / pc"
                break;
            case 1:
                meryenda.src = pancitCanton;
                meryendaTextHeader.innerText = "Pancit Canton"
                meryendaTextBody.innerText = "Kikiligin ka sa sarap."
                meryendaTextPrice.innerText = "Php300 / order"
                break;
            case 2:
                meryenda.src = pancitBihon;
                meryendaTextHeader.innerText = "Pancit Bihon"
                meryendaTextBody.innerText = "Wag to, mas masarap yung Pancit Canton."
                meryendaTextPrice.innerText = "Php350 / order"
                break;
            case 3:
                meryenda.src = friedChicken;
                meryendaTextHeader.innerText = "Fried Chicken"
                meryendaTextBody.innerText = "Kumain ka ng kumain neto nang tumaas lalo BP mo."
                meryendaTextPrice.innerText = "Php70 / pc"
                break;
            case 4:
                meryenda.src = spag;
                meryendaTextHeader.innerText = "Spaghetti"
                meryendaTextBody.innerText = "Basta masarap to. Try mo na. Yie."
                meryendaTextPrice.innerText = "Php150 / order"
                break;
            case 5:
                meryenda.src = biryani;
                meryendaTextHeader.innerText = "Chicken Biryani"
                meryendaTextBody.innerText = "This is delicious, my friend."
                meryendaTextPrice.innerText = "Php1500 / order"
                break;
        }
        items.appendChild(meryenda);
        items.appendChild(meryendaText);
        meryendaText.appendChild(meryendaTextHeader);
        meryendaText.appendChild(meryendaTextBody);
        meryendaText.appendChild(meryendaTextPrice);
    }

}
export default Menu;