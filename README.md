## Hey @chris!

From your reaction, I believe you visualized a lot of inline style+markup spaghetti on code, right? Nobody wants to deal with that. This isn't what I'm doing, though - on code, style and markup are decoupled, just as they should. The only difference is that instead of `styles.css`, I have a `styles.js`, which uses VirtualDOM to power up the file a little bit - just like SASS, but better.

[Click here to see demo.](https://maiavictor.github.io/why_inline)

Those blocks display the classes I applied to them. Notice some of those aren't expressible with pure CSS. That is the point: it is not about having less classes, it is about having more of them! Things that could only be done with CSS + jQuery edits can now be **just classes**. The code gets much more organized like that.

[Click here to see the "pseudo-HTML" file, `markup.js`](https://github.com/MaiaVictor/why_inline/blob/gh-pages/markup.js)

[Click here to see the "pseudo-CSS" file, `style.js`](https://github.com/MaiaVictor/why_inline/blob/gh-pages/style.js)

--

I could go full jQuery, turn `style.js` in a flat `style.css` file, and pass the fancy effects to DOM-manipulating functions. But now **that** would couple controllers with styles, would defeat the "pure" aspect of VirtualDOM (which is the whole point), and would decrease a lot code quality overall, IMO. So, please, evaluate if this coding style is reasonable and let me know what you think.
