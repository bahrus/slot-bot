import {define} from 'xtal-element/lib/define.js';
import {ISlotBot} from './types.d.js';

const dest_slot = 'dest-slot';

export class SlotBot extends HTMLElement implements ISlotBot{
    static is = 'slot-bot';

    cloneSlot(){
        const sE = this.previousElementSibling as HTMLSlotElement;
        const ns = this.nextElementSibling!;
        ns.innerHTML = '';
        sE.assignedNodes().forEach(el => {
            switch(el.nodeType){
                case 1:
                case 3:
                    const clone = el.cloneNode(true) as HTMLElement;
                    this.dispatchEvent(new CustomEvent('cloned-node', {
                        detail:{
                            clone: clone,
                            lightChild: el
                        }
                    }));
                    if(el.nodeType === 1){
                        const destSlot = this.getAttribute(dest_slot);
                        if(destSlot !== null){
                            clone.setAttribute('slot', destSlot);
                        }else{
                            clone.removeAttribute('slot');
                        }
                    }

                    ns.appendChild(clone);
                    break;
            }
        });
    }
    connectedCallback(){
        this.style.display = 'none';
        this.previousElementSibling!.addEventListener('slotchange', (event: Event) => {
            this.cloneSlot();
        });
    }
}
define(SlotBot);

declare global {
    interface HTMLElementTagNameMap {
        "slot-bot": SlotBot,
    }
}