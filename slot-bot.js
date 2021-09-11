import { def } from 'trans-render/lib/def.js';
const dest_slot = 'dest-slot';
export class SlotBot extends HTMLElement {
    static is = 'slot-bot';
    cloneSlot() {
        const sE = this.previousElementSibling;
        const ns = this.nextElementSibling;
        ns.innerHTML = '';
        sE.assignedNodes().forEach(el => {
            switch (el.nodeType) {
                case 1:
                case 3:
                    const clone = el.cloneNode(true);
                    this.dispatchEvent(new CustomEvent('cloned-node', {
                        detail: {
                            clone: clone,
                            lightChild: el
                        }
                    }));
                    if (el.nodeType === 1) {
                        const destSlot = this.getAttribute(dest_slot);
                        if (destSlot !== null) {
                            clone.setAttribute('slot', destSlot);
                        }
                        else {
                            clone.removeAttribute('slot');
                        }
                    }
                    ns.appendChild(clone);
                    break;
            }
        });
    }
    connectedCallback() {
        this.style.display = 'none';
        this.cloneSlot();
        this.previousElementSibling.addEventListener('slotchange', (event) => {
            this.cloneSlot();
        });
    }
}
def(SlotBot);
