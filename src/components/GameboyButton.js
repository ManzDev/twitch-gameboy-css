class GameboyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 47px;
      }

      .container {
        width: var(--size);
        height: var(--size);
        background-color: #E66E94;
        border-radius: 50%;
        background: radial-gradient(26px 26px at 24px 27px, #6F0119 75%, #A20D37 90%,#EF94B2);
        box-shadow: 1px -4px 0 -3px #7c4b5b inset, -3px 7px 5px -2px #1e0009, 1px -1px 0 2px #53182b;
      }

      .label {
        font-family: "Pretendo";
        font-size: 12px;
        letter-spacing: 0.5px;
        color: #302058;
        transform: translate(35%, 450%);
      }
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyButton.styles}</style>
    <div class="container">
      <div class="label">${this.name}</div>
    </div>`;
  }
}

customElements.define("gameboy-button", GameboyButton);
