class GameModal extends HTMLElement {
  constructor() {
    super();
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    const msg = modal.appendChild(document.createElement('div'));
    msg.setAttribute('class', 'msg');
    msg.setAttribute('tabindex', 0);
    const img = icon.appendChild(document.createElement('img'));
    img.src = this.hasAttribute('img') ? this.getAttribute('img') : ''
  }
}
