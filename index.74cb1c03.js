const h=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function b(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=b(t);fetch(t.href,e)}};h();class o extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --height: 25px;
      }

      .container {
        display: flex;
        padding-bottom: 5px;
        margin-bottom: 1px;
        height: var(--height);
        overflow: hidden;
        border-radius: 12px 12px 0 0;
        box-shadow: 0px 18px 5px -10px #fff inset;
      }

      .container > div {
        border-radius: 0 0 2px 2px;
        border: 1px solid #1111;
        box-shadow: 0 2px 2px #2f2725aa;
      }

      .corner {
        width: 25px;
      }

      .corner.left {
        margin-right: 5px;
      }

      .corner.right {
        margin-left: 5px;
      }

      .top {
        width: 100%;
      }

      .top span {
        display: inline-block;
        font-family: Arial, sans-serif;
        font-size: 12px;
        color: #eee;
        text-shadow:
          1px 2px 2px #0006;
        border-radius: 15px;
        padding: 1px 4px;
        transform: translate(6px, 1px);
        box-shadow:
          0px 1px 2px #0005 inset,
          0px -1px 2px #fffc inset;
        opacity: 0.8;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="container">
      <div class="corner left"></div>
      <div class="top">
        <span>\u25C1 OFF\xB7ON \u25B7</span>
      </div>
      <div class="corner right"></div>
    </div>`}}customElements.define("gameboy-top",o);class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="container">

    </div>`}}customElements.define("gameboy-screen",i);class r extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${r.styles}</style>
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
    </div>`}}customElements.define("gameboy-crystal",r);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
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
    </div>`}}customElements.define("gameboy-cross",n);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.name=this.getAttribute("name"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <div class="label">${this.name}</div>
    </div>`}}customElements.define("gameboy-button",d);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.name=this.getAttribute("name"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <div class="button"></div>
    </div>
    <div class="label">${this.name}</div>
    `}}customElements.define("gameboy-option-button",p);class x extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${x.styles}</style>
    <div class="container">
      <div class="band"></div>
      <div class="band"></div>
      <div class="band"></div>
      <div class="band"></div>
      <div class="band"></div>
      <div class="band"></div>
    </div>`}}customElements.define("gameboy-speaker",x);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 380px;
        --height: 625px;
      }

      .container {
        --gameboy-bottom-depth: linear-gradient(transparent 97.75%, #0004 98.5%, #0005 99%);

        width: var(--width);
        height: var(--height);
        background-color: #d7d2d8;
        background-image:
          linear-gradient(-31deg, #8b8b8b 0 75px, transparent 80px),
          var(--gameboy-bottom-depth);
        border-radius: 12px 12px 75px 12px;
        box-shadow:
          0 0 10px #0007,
          1px 0 10px 3px #0008 inset;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
      }

      .screen-container {
        height: 325px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 25px;
        border-top: 1px solid #fff8;
        border-radius: 2% 2% 0% 0% / 0.5% 0.5% 0% 0%;
      }

      .brand {
        color: #332C60;
        padding-top: 4px;
        text-shadow: 0 0 1px #30205855;
      }

      .brand .company {
        font-family: "Pretendo";
        font-size: 15px;
        letter-spacing: 0.5px;
      }

      .brand .product {
        font-family: "Lato";
        font-size: 23px;
        font-weight: bold;
        font-style: italic;
      }

      .brand sub {
        display: inline-block;
        font-family: "Lato";
        font-size: 15px;
        transform: translateY(2px);
      }

      .controls-container {
        height: 275px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .controls {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 140px;
        padding: 0 20px 0 10px;
        box-sizing: border-box;
      }

      .controls gameboy-cross {
        width: 130px;
        height: 130px;
      }

      .controls .buttons {
        width: 140px;
        height: 68px;
        background: linear-gradient(10deg, #EFF2F099, #AE9FA699);
        box-shadow:
          0 0 4px 2px #ccc,
          0 20px 4px -2px #6661 inset;
        border-radius: 40px;
        transform: translateY(30px) rotate(-25deg);

        display: flex;
        justify-content: space-between;
        padding: 10px;
        box-sizing: border-box;
      }

      gameboy-speaker {
        width: 130px;
        height: 90px;
        position: absolute;
        bottom: 0;
        right: 0;
      }

      .option-buttons {
        width: 130px;
        height: 55px;
        display: flex;
        transform: translateY(30px);
      }

      .bottom {
        position: absolute;
        bottom: 0;
      }

      .bottom .phones {
        display: inline-block;
        font-family: Arial, sans-serif;
        font-size: 10px;
        color: #eee;
        border-radius: 15px;
        padding: 2px 4px;
        text-shadow: 1px 1px 1px #0003;
        box-shadow:
          1px 2px 2px #0005 inset,
          0px -2px 2px #fffd inset;
        opacity: 0.8;
        transform: translate(-2px, 0);
      }

      .bottom .phones span {
        filter: brightness(0) invert(0.95);
      }

      .slot {
        margin: auto;
      }

      .slot,
      .slot::before,
      .slot::after {
        width: 5px;
        height: 10px;
        background-image: radial-gradient(transparent, #0003);
      }

      .slot::before,
      .slot::after {
        content: "";
        display: block;
        width: 5px;
        height: 10px;
        position: absolute;
      }

      .slot::before {
        transform: translateX(-8px);
      }

      .slot::after {
        transform: translateX(8px);
      }

      .power-switch {
        width: 34px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        background: #fff;
        background-image: repeating-linear-gradient(to bottom, #fff 0 1px, #ddd 1px 3px);
        transform: translate(50px, -8px);
        z-index: -1;
      }

      .power-switch.on {
        transform: translate(70px, -8px);
      }

    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="power-switch"></div>
      <gameboy-top></gameboy-top>
      <div class="screen-container">
        <gameboy-crystal></gameboy-crystal>
        <div class="brand">
          <span class="company">Nintendo</span>
          <span class="product">GAME BOY</span>
          <sub>\u2122</sub>
        </div>
      </div>
      <div class="controls-container">
        <div class="controls">
          <gameboy-cross></gameboy-cross>
          <div class="buttons">
            <gameboy-button name="B"></gameboy-button>
            <gameboy-button name="A"></gameboy-button>
          </div>
        </div>
        <gameboy-speaker></gameboy-speaker>
        <div class="option-buttons">
          <gameboy-option-button name="SELECT"></gameboy-option-button>
          <gameboy-option-button name="START"></gameboy-option-button>
        </div>
        <div class="bottom">
          <div class="phones"><span>\u{1F3A7}</span>PHONES</div>
          <div class="slot"></div>
        </div>
      </div>
    </div>`}}customElements.define("gameboy-console",l);
