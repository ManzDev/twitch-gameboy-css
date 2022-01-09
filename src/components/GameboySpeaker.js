class GameboySpeaker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }

      .container {
        display: flex;
        width: 120px;
        justify-content: space-around;
        position: absolute;
        right: 10px;
        bottom: 35px;
        transform: rotate(-30deg);
      }

      .band {
        width: 8px;
        height: 60px;
        border-radius: 8px;
        box-shadow: 3px 6px 1px rgba(0, 0, 0, 0.6) inset;
        background: rgba(0, 0, 0, 0.35);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboySpeaker.styles}</style>
    <div class="container">
      <div class="band"></div>
      <div class="band"></div>
      <div class="band"></div>
      <div class="band"></div>
      <div class="band"></div>
      <div class="band"></div>
    </div>`;
  }
}

customElements.define("gameboy-speaker", GameboySpeaker);
