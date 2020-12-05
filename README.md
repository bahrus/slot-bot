# slot-bot

slot-bot provides a way to declaratively "ferry" a replica of the light children into the Shadow DOM realm. Once inside the shadowDOM, among other things, encapsulated styling can be applied to these replicated children, without having unintended side effects on DOM elements outside the Shadow DOM realm.  Class names can now be nice and short, as the web component namespaces the classes automatically (as long as the rest of the application is well encapsulated, using ShadowDOM).  This could improve loading performance, especially once CSS Modules / HTML Modules become a thing.  Not to mention being a lot less taxing on those of us feeble minded individuals who have trouble distinguishing subtle differences between names [like](https://en.wikipedia.org/wiki/Hubert_Blaine_Wolfeschlegelsteinhausenbergerdorff_Sr.#:~:text=(a.k.a.%20Hubert%20Wolfstern%2C%20Hubert%20B,longest%20personal%20name%20ever%20used.):

Wolfe__schlegel__­stein_hausen­__berger--dorff--­welche--­vor­altern--­waren--­gewissenhaft

or fights over how [many angels can dance on the head of a pin](https://stackoverflow.com/a/54075051/3320028).

[TODO]  Allow for transformations on the nodes after cloning.

## Syntax

For this to work, three tags are needed within the ShadowDOM:

```html
<slot style="display:none" name=mySlot></slot>
<slot-bot></slot-bot>
<div id="content"></div>
```

slot-bot acts as the "transfer medium" between the slot tag above it, and the placeholder DOM tag/node beneath it.


