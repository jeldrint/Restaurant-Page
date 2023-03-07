import spag from './meryenda/spag.png'
const Menu = () => {
    const body = document.querySelector('.page-body');

    body.style.display = 'grid';
    body.style.gridTemplateColumns = '1fr 1fr';

    for (let i =0; i< 6; i++){
        let items = document.createElement('div');
        body.appendChild(items);
        items.setAttribute('id',`item-${i+1}`);
        items.className = `menu-item`
        const meryendaSpag = new Image();
        meryendaSpag.src = spag;
        body.appendChild(meryendaSpag);
        meryendaSpag.className = 'meryenda-spag';
    
    }


}
export default Menu;