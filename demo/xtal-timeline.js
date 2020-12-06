import { define } from 'trans-render/define.js';
import { createTemplate } from 'trans-render/createTemplate.js';
import { preemptiveImport } from 'xtal-sip/preemptiveImport.js';
import '../slot-bot.js';
const lineIcons = '//cdn.lineicons.com/1.0.1/LineIcons.min.css';
preemptiveImport([lineIcons, , '//cdn.lineicons.com/1.0.1/LineIcons.min.css', , { cssScope: 'global' }]);
const googleFonts = '//fonts.googleapis.com/css?family=Open+Sans:100,300,400,600&amp;display=swap';
preemptiveImport([googleFonts, , googleFonts, , { cssScope: 'global' }]);
const mainTemplate = createTemplate(/* html */ `
<link rel="stylesheet" href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
<style>
  :host{
    display:block;
  }
* {
    box-sizing: border-box;
  }
  

  #content {
    font-size: 14px;
    background: #f6f9fc;
    font-family: "Open Sans", sans-serif;
    color: #525f7f;
  }
  

  
  h2 {
    margin: 5%;
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
  }
  
  .timeline {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    position: relative;
  }
  .event {
    margin-bottom: 20px;
    position: relative;
    display: flex;
    margin: 20px 0;
    border-radius: 6px;
    align-self: center;
    width: 50vw;
  }
  .event:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }
  .event:nth-child(2n + 1) .event__date {
    border-radius: 0 6px 6px 0;
  }
  .event:nth-child(2n + 1) .event__content {
    border-radius: 6px 0 0 6px;
  }
  .event:nth-child(2n + 1) .event__icon:before {
    content: "";
    width: 2px;
    height: 160px;
    background: #f6a4ec;
    position: absolute;
    top: 0%;
    left: 50%;
    right: auto;
    z-index: -1;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    -webkit-animation: fillTop 2s forwards 4s ease-in-out;
            animation: fillTop 2s forwards 4s ease-in-out;
  }
  .event:nth-child(2n + 1) .event__icon:after {
    content: "";
    width: 100%;
    height: 2px;
    background: #f6a4ec;
    position: absolute;
    right: 0;
    z-index: -1;
    top: 50%;
    left: auto;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    -webkit-animation: fillLeft 2s forwards 4s ease-in-out;
            animation: fillLeft 2s forwards 4s ease-in-out;
  }
  .event__title {
    font-size: 1.2rem;
    line-height: 1.4;
    text-transform: uppercase;
    font-weight: 600;
    color: #9251ac;
    letter-spacing: 1.5px;
  }
  .event__content {
    padding: 20px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    background: #fff;
    width: calc(40vw - 84px);
    border-radius: 0 6px 6px 0;
  }
  .event__date {
    color: #f6a4ec;
    font-size: 1.5rem;
    font-weight: 600;
    background: #9251ac;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 0 20px;
    border-radius: 6px 0 0 6px;
  }
  .event__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9251ac;
    padding: 20px;
    align-self: center;
    margin: 0 20px;
    background: #f6a4ec;
    border-radius: 100%;
    width: 40px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    padding: 40px;
    height: 40px;
    position: relative;
  }
  .event__icon i {
    font-size: 32px;
  }
  .event__icon:before {
    content: "";
    width: 2px;
    height: 160px;
    background: #f6a4ec;
    position: absolute;
    top: 0%;
    z-index: -1;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    -webkit-animation: fillTop 2s forwards 4s ease-in-out;
            animation: fillTop 2s forwards 4s ease-in-out;
  }
  .event__icon:after {
    content: "";
    width: 100%;
    height: 2px;
    background: #f6a4ec;
    position: absolute;
    left: 0%;
    z-index: -1;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    -webkit-animation: fillLeftOdd 2s forwards 4s ease-in-out;
            animation: fillLeftOdd 2s forwards 4s ease-in-out;
  }
  .event__description {
    flex-basis: 60%;
  }
  .event--type2:after {
    background: #555ac0;
  }
  .event--type2 .event__date {
    color: #87bbfe;
    background: #555ac0;
  }
  .event--type2:nth-child(2n + 1) .event__icon:before, .event--type2:nth-child(2n + 1) .event__icon:after {
    background: #87bbfe;
  }
  .event--type2 .event__icon {
    background: #87bbfe;
    color: #555ac0;
  }
  .event--type2 .event__icon:before, .event--type2 .event__icon:after {
    background: #87bbfe;
  }
  .event--type2 .event__title {
    color: #555ac0;
  }
  .event--type3:after {
    background: #24b47e;
  }
  .event--type3 .event__date {
    color: #aff1b6;
    background-color: #24b47e;
  }
  .event--type3:nth-child(2n + 1) .event__icon:before, .event--type3:nth-child(2n + 1) .event__icon:after {
    background: #aff1b6;
  }
  .event--type3 .event__icon {
    background: #aff1b6;
    color: #24b47e;
  }
  .event--type3 .event__icon:before, .event--type3 .event__icon:after {
    background: #aff1b6;
  }
  .event--type3 .event__title {
    color: #24b47e;
  }
  .event:last-child .event__icon:before {
    content: none;
  }
  
  @media (max-width: 786px) {
    .event {
      flex-direction: column;
      align-self: center;
    }
    .event__content {
      width: 100%;
    }
    .event__icon {
      border-radius: 6px 6px 0 0;
      width: 100%;
      margin: 0;
      box-shadow: none;
    }
    .event__icon:before, .event__icon:after {
      display: none;
    }
    .event__date {
      border-radius: 0;
      padding: 20px;
    }
    .event:nth-child(2n + 1) {
      flex-direction: column;
      align-self: center;
    }
    .event:nth-child(2n + 1) .event__date {
      border-radius: 0;
      padding: 20px;
    }
    .event:nth-child(2n + 1) .event__icon {
      border-radius: 6px 6px 0 0;
      margin: 0;
    }
  }
  @-webkit-keyframes fillLeft {
    100% {
      right: 100%;
    }
  }
  @keyframes fillLeft {
    100% {
      right: 100%;
    }
  }
  @-webkit-keyframes fillTop {
    100% {
      top: 100%;
    }
  }
  @keyframes fillTop {
    100% {
      top: 100%;
    }
  }
  @-webkit-keyframes fillLeftOdd {
    100% {
      left: 100%;
    }
  }
  @keyframes fillLeftOdd {
    100% {
      left: 100%;
    }
  }
  
</style>
<slot style="display:none">
</slot>
<slot-bot></slot-bot>
<div id="content"></div>
`);
export class XtalTimeline extends HTMLElement {
    static get is() { return 'xtal-timeline'; }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(mainTemplate.content.cloneNode(true));
    }
}
define(XtalTimeline);
