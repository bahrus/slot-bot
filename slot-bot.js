import { define } from 'xtal-element/lib/define.js';
const dest_slot = 'dest-slot';
export class SlotBot extends HTMLElement {
    cloneSlot() {
        const sE = this.previousElementSibling;
        const ns = this.nextElementSibling;
        ns.innerHTML = '';
        sE.assignedNodes().forEach(el => {
            if (el.nodeType === 1) {
                const clone = el.cloneNode(true);
                this.dispatchEvent(new CustomEvent('cloned-node', {
                    detail: {
                        clone: clone,
                        lightChild: el
                    }
                }));
                const destSlot = this.getAttribute(dest_slot);
                if (destSlot !== null) {
                    clone.setAttribute('slot', destSlot);
                }
                else {
                    clone.removeAttribute('slot');
                }
                ns.appendChild(clone);
            }
        });
    }
    connectedCallback() {
        this.style.display = 'none';
        this.previousElementSibling.addEventListener('slotchange', (event) => {
            this.cloneSlot();
        });
    }
}
SlotBot.is = 'slot-bot';
define(SlotBot);
