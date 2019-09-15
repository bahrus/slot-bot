import {define} from 'trans-render/define.js';

const dest_slot = 'dest-slot';

export class SlotBot extends HTMLElement{
    static get is(){return 'slot-bot';}

    connectedCallback(){
        this.style.display = 'none';
        this.previousElementSibling!.addEventListener('slotchange', (event: Event) => {
            const sE = event.target as HTMLSlotElement;
            const ns = this.nextElementSibling!;
            ns.innerHTML = '';
            sE.assignedNodes().forEach(el => {
                if(el.nodeType === 1){
                    const clone = el.cloneNode(true) as HTMLElement;
                    const destSlot = this.getAttribute(dest_slot);
                    if(destSlot !== null){
                        clone.setAttribute('slot', destSlot);
                    }else{
                        clone.removeAttribute('slot');
                    }
                    ns.appendChild(clone);
                }
                
            });
        });
    }
}
define(SlotBot);