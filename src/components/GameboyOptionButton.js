class GameboyOptionButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 50px;
        --height: 12px;
      }

      .container {
          background: linear-gradient(to top, #EFF2F0, #AE9FA6);
          box-shadow:
            -4px 4px 3px -3px #0005 inset,
            4px -4px 3px -3px #fffc inset;
          transform: rotate(-28deg);
          border-radius: 15px;
          padding: 1px 0;
      }

      .button {
        background: #9e9baf;
        background-image: linear-gradient(#C0BECA, #7F7584);
        border-radius: 10px;
        box-shadow:
          -2px -2px 5px #0004 inset,
          2px 2px 5px #fff3 inset,
          2px 2px 6px #0007,
          -1px 2px 3px #000d;
        width: var(--width);
        height: var(--height);
        margin: 3px 6px;
      }

      .label {
        font-family: "Pretendo";
        font-size: 10px;
        letter-spacing: 0.5px;
        color: #302058;
        transform: translate(10px, 2px) rotate(-28deg);
        text-align: center;
      }
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyOptionButton.styles}</style>
    <div class="container">
      <div class="button"></div>
    </div>
    <div class="label">${this.name}</div>
    `;
  }
}

customElements.define("gameboy-option-button", GameboyOptionButton);
