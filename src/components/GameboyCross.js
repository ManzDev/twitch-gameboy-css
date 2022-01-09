class GameboyCross extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 120px;
      }

      .container {
        --large: 85px;
        --short: 22px;
        --dark-color: #060206;

        margin: 5px;
        width: var(--size);
        height: var(--size);
        background: #CFC8D1;
        background-image:
          radial-gradient(#0003 1%, transparent),
          linear-gradient(50deg, #E1DEEA 10%, #D9D2D5 90%);
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .axis {
        background: var(--dark-color);
        border-radius: 2px;
        box-shadow:
          0 0 1px 4px #000,
          0 5px 2px 1px #0008;
        display: flex;
        justify-content: space-between;
      }

      .axis::before,
      .axis::after {
        content: "";
        display: block;
        background: #ddd;
        filter:
          drop-shadow(2px 5px 1px red)
          drop-shadow(-2px -5px 1px blue);
        width: 6px;
        height: 6px;
        clip-path: polygon(0 0, 50% 100%, 100% 0);
        position: absolute;
      }

      .axis.x::before,
      .axis.x::after {
        --x: 0;
        transform: translate(var(--x), 8px) rotate(var(--rotate));
      }

      .axis.x::before { --x: -15px; --rotate: 90deg; }
      .axis.x::after { --x: 15px; --rotate: -90deg; }

      .axis.y::before,
      .axis.y::after {
        --y: 0;
        transform: translate(8px, var(--y)) rotate(var(--rotate));
      }

      .axis.y::before { --y: -15px; --rotate: 180deg; }
      .axis.y::after { --y: 15px; --rotate: 0; }

      .axis.x::after { right: 0; }
      .axis.y::after { bottom: 0; }

      .axis.x {
        width: var(--large);
        height: var(--short);
        position: absolute;
        border: 2px solid #363439;
        border-top: 3px solid #B7BEC8;
      }

      .axis.y {
        width: var(--short);
        height: var(--large);
        position: absolute;
        border: 2px solid #363439;
        border-top: 3px solid #B7BEC8;
        flex-direction: column;
      }

      .axis .group {
        width: calc(var(--short) + 0px);
        height: calc(var(--short) - 4px);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 3px;
      }

      .axis.y .group {
        transform: rotate(90deg);
        padding: 5px 1px;
      }

      .axis.x .group {
        padding: 2px 1px;
      }

      .axis .group .band {
        width: 5px;
        height: 100%;
        background: #181818;
        border-radius: 5px;
      }

      .center {
        width: calc(var(--short) + 5px);
        height: calc(var(--short) + 5px);
        background: var(--dark-color);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .center .gap {
        width: 80%;
        height: 80%;
        background:
          conic-gradient(
            #DDE8F777 0 1%,
            transparent 10% 35%,
            #DDE8F7 50%,
            transparent 65% 90%,
            #DDE8F777 99%
          );
        border-radius: 50%;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyCross.styles}</style>
    <div class="container">
      <div class="x axis">
        <div class="group">
          <div class="band"></div>
          <div class="band"></div>
          <div class="band"></div>
        </div>
        <div class="group">
          <div class="band"></div>
          <div class="band"></div>
          <div class="band"></div>
        </div>
      </div>
      <div class="y axis">
        <div class="group">
          <div class="band"></div>
          <div class="band"></div>
          <div class="band"></div>
        </div>
        <div class="group">
          <div class="band"></div>
          <div class="band"></div>
          <div class="band"></div>
        </div>
      </div>
      <div class="center">
        <div class="gap"></div>
      </div>
    </div>`;
  }
}

customElements.define("gameboy-cross", GameboyCross);
