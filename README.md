# slot-bot

slot-bot provides a way to declaratively "ferry" a replica of the light children into the Shadow DOM realm. Once inside the shadowDOM, among other things, encapsulated styling can be applied to these replicated children, without having unintended side effects on DOM elements outside the Shadow DOM realm.  Class names can now be nice and short, as the web component namespaces the classes automatically (as long as the rest of the application is well encapsulated, using ShadowDOM).  This could improve loading performance, especially once CSS Modules / HTML Modules become a thing.  Not to mention being a lot less taxing on those of us feeble minded individuals who have trouble distinguishing subtle differences between names [like](https://en.wikipedia.org/wiki/Hubert_Blaine_Wolfeschlegelsteinhausenbergerdorff_Sr.#:~:text=(a.k.a.%20Hubert%20Wolfstern%2C%20Hubert%20B,longest%20personal%20name%20ever%20used.):

Wolfe__schlegel__­stein_hausen­__berger--dorff--­welche--­vor­altern--­waren--­gewissenhaft

or fights over how [many angels can dance on the head of a pin](https://stackoverflow.com/a/54075051/3320028).

[TODO]  Allow for transformations on the nodes after cloning.

slot-bot is the equivalent of the Centre Pompidou for web components.

[![Centre Pompidou](https://www.theartpostblog.com/wp-content/uploads/2019/02/img-Pompidou-esterno.jpg)](https://www.theartpostblog.com/en/pompidou-tickets/)

## Is this abusing web standards?

Slots were built with the specific intent of ferrying snippets of content inside the Shadow DOM.  Aren't you trampling all over the spirit of how web components are supposed to work?

Slots are great when they do the job.  However, the ability to style the slotted content is [quite limited](https://developers.google.com/web/fundamentals/web-components/shadowdom#stylinglightdom) -- only top level child nodes can be styled.

And cloning a DOM tree has a cost, of course.

In many cases, use of this component may provide a straightforward "first draft" or prototype of a component.  For example, if you look at the [sample markup](https://github.com/bahrus/slot-bot/blob/baseline/demo/dev.html) for a timeline, one can see that some of the class names suggest ways to break down the monolith component into sub-components -- a component for an event, for example, would probably be sufficient for true slotting to be sufficient.  Doing so may tend to take a bit more time than at first anticipated, because as the Shadow DOM is broken down logically, the css rules will need to be adjusted accordingly.  

## Syntax

For this to work, three tags are needed within the ShadowDOM:

```html
<slot style="display:none" name=mySlot></slot>
<slot-bot></slot-bot>
<div id="content"></div>
```

slot-bot acts as the "transfer medium" between the slot tag above it, and the placeholder DOM tag/node beneath it.


