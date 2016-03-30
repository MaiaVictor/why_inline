// STYLE / CSS
// This file is the equivalent of styles.css, but with JS (VirtualDOM). Notice
// the code *is* organized by classes and markup/style *is* decoupled. But
// this way to do it gives us some additional powers that you will see.

var obj = require("./js/object.js");
var pix = require("./js/pixel.js");

// This class makes an element have a fancy text.
// This is just like regular CSS.
var block = {
    "width": "280px",
    "height": "64px",
    "line-height": "64px",
    "white-space": "nowrap",
    "text-align": "center",
    "margin": "10px",
    "border": "1px solid black"
};

// This class builds a block.
var fancy = {
    "color": "rgb(137, 179, 217)",
    "font-weight": "bold",
    "text-decoration": "wavy",
    "font-family": "courier new",
    "text-shadow": "2px 2px #ff0000"
};

// This class gives the element a shadow.
var shadow = {
    "box-shadow": "0px 0px 4px 4px rgba(0, 0, 0, 0.4)"
};

// This class makes an element become a circle 
// with a parameterized radius of your choice!
// Regular CSS can't do that. SASS can.
var circle = function(rad){
    return {
        "width": (rad*2) + "px",
        "height": (rad*2) + "px",
        "line-height": (rad*2) + "px",
        "border-radius": rad + "px"};
};

// This class makes the element trippy! 
// Regular CSS can't do that, nor can SASS!
var trippy = (function(){
    return function(){
        var t = Date.now()/1000, sin = Math.sin;
        return {"background-color": pix.htmlString(pix.hsl(sin(t), sin(t*2.3), sin(t*1.4)))};
    };
})();

// This class makes the element wiggle
var wiggle = function(f){
    var t = Date.now()/1000, sin = Math.sin;
    return {
        "position": "relative",
        "left": Math.round(sin(t*f)*6)+"px"};
};

// This class makes an element follow the mouse!
var follow_mouse = (function(){
    var mouse_x = 512, mouse_y = 512;
    window.onmousemove = function(e){
        mouse_x = e.pageX;
        mouse_y = e.pageY;
    };
    return function(){
        return {
            "position": "absolute",
            "left": mouse_x + "px",
            "top": mouse_y + "px"};
    };
})();

module.exports = {
    block: block,
    fancy: fancy,
    shadow: shadow,
    wiggle: wiggle,
    circle: circle,
    trippy: trippy,
    follow_mouse: follow_mouse
};
