import {define} from 'trans-render/define.js';

export class SlotBot extends HTMLElement{
    static get is(){return 'slot-bot';}
    connectedCallback(){
        this.previousElementSibling!.addEventListener('slotchange', (event: Event) => {
            const sE = event.target as HTMLSlotElement;
            const ns = this.nextElementSibling!;
            ns.innerHTML = '';
            sE.assignedNodes().forEach(el => {
                if(el.nodeType === 1){
                    ns.appendChild(el.cloneNode(true));
                }
                
            });
        });
    }
}
define(SlotBot);