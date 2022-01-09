class GameboyScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 210px;
        --height: 180px;
      }

      .container {
        background: #9ca04c;
        width: var(--width);
        height: var(--height);

        box-shadow:
          5px 5px 10px #0008 inset,
          -2px -1px 10px #0005 inset,
          0 0 4px 3px #aaa4;

        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyScreen.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("gameboy-screen", GameboyScreen);
