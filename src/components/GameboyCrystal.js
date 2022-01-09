import "./GameboyScreen.js";

class GameboyCrystal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 330px;
        --height: 240px;
      }

      .container {
        background-color: #737488;
        width: var(--width);
        height: var(--height);
        border-radius: 10px 10px 35px 10px;
        border: 1px solid #666;
        border-width: 0 1px 0 1px;
        box-shadow:
          0 0 2px #514c65,
          0 -1px 1px #161118,
          0 -2px 1px #A0939F,
          0 -4px 1px #514c65,
          0 0 2px 2px #9C99AC88 inset,
          0 -1px 2px 1px #0006 inset;
      }

      .top {
        --gameboy-stripe-gradient:
        linear-gradient(
          transparent 10px,
          #7d1a4a 11px 12px,
          transparent 12px 16px,
          #35224e 16px 18px,
          transparent 18px
        );

        background: var(--gameboy-stripe-gradient);
        position: relative;
        height: 26px;
        margin: 0 15px;
        top: 0;
      }

      .top span {
        padding: 0 8px;
        background: #767189;
        position: absolute;
        right: 40px;
        top: 8px;
      }

      .top .text {
        font-size: 9.5px;
      }

      .bottom {
        display: flex;
      }

      .battery {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transform: translateY(-20px);
      }

      .battery .led {
        width: 10px;
        height: 10px;
        background: #4a4748;
        border-radius: 50%;
        margin: 6px;
      }

      .battery .led.on {
        background: #E11E0A;
        background-image: linear-gradient(0deg, transparent, #fff2);
        box-shadow: 0 0 2px 1.5px #d87473;
      }

      .battery .text {
        font-size: 8px;
      }

      .text {
        font-family: Arial, sans-serif;
        font-size: 10px;
        color: #eee;
        text-shadow: 0 0 2px #eee9;
      }

      gameboy-screen {
        transform: translate(2px, 2px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyCrystal.styles}</style>
    <div class="container">
      <div class="top">
        <span class="text">DOT MATRIX WITH STEREO SOUND</span>
      </div>
      <div class="bottom">
        <div class="battery">
          <div class="led on"></div>
          <div class="text">BATTERY</div>
        </div>
        <gameboy-screen></gameboy-screen>
      </div>
    </div>`;
  }
}

customElements.define("gameboy-crystal", GameboyCrystal);
