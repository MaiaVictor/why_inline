var create_element = require("virtual-dom/create-element");
var diff           = require("virtual-dom/diff");
var patch          = require("virtual-dom/patch");
var markup         = require("./markup.js");

window.requestAnimationFrame((function (){
    var old_vnode = null;
    return function refresh(){
        var vnode = markup();
        if (!old_vnode) 
            document.body.appendChild(element = create_element(vnode));
        else {
            var t = Date.now();
            var patches = diff(old_vnode, vnode);
            patch(element, patches);
        };
        old_vnode = vnode;
        window.requestAnimationFrame(refresh);
    };
})());

