const Contact = () => {
    const body = document.querySelector('.page-body');
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.minWidth = '500px';
    body.style.maxWidth = '800px';
    body.style.justifyContent = 'center';
    body.style.marginTop = '7%'
    body.style.marginBottom = '13%'

    const contactHeader = document.createElement('div');
    contactHeader.className = 'contact-header';
    contactHeader.innerText = "Contact Us.";
    body.appendChild(contactHeader);

    const contactPersonEl = document.createElement('div');
    contactPersonEl.setAttribute('class','contact-person');
    body.appendChild(contactPersonEl);
    contactPersonEl.innerText = '\u260E +63961234567 \n\n \u26EA Near Pag-asa Market, Olongapo City, Zambales'
}
export default Contact;