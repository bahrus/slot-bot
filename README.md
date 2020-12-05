# slot-bot

slot-bot provides a way to declaratively "ferry" a replica of the light children into the Shadow DOM realm. Once inside the shadowDOM, among other things, encapsulated styling can be applied to these replicated children, without having unintended side effects on DOM elements outside the Shadow DOM realm.  Class names can now be nice and short, as the web component namespaces the classes automatically.  This could improve loading performance, especially once CSS Modules / HTML Modules become a thing.

[TODO]  Allow for transformations on the nodes after cloning.

## Syntax

For this to work, three tags are needed within the ShadowDOM:

```html
<slot style="display:none" name=mySlot></slot>
<slot-bot></slot-bot>
<div id="content"></div>
```

slot-bot acts as the "transfer medium" between the slot tag above it, and the placeholder DOM tag/node beneath it.


