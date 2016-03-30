// MARKUP (HTML)
// This is the equivalent of an HTML file, except on VDOM. Here, we use the
// previously defined styles just like CSS classes, except we can parametrize
// and combine them at will. The styles are NOT inline on the markup code!

var obj = require("./js/object.js");
var s   = require("./style.js"); for (var k in s) global[k]=s[k];
var S   = obj.merge_all;
var h   = require("virtual-dom/h");

module.exports = function(){
    var t = Date.now()/1000, sin = Math.sin;

    return h("div", [

        // This is like: <div class="block">block</div>
        h("div", 
            {"style": block},
            "block"),

        // This is like: <div class="block fancy">block</div>
        h("div", 
            {"style": S(block, fancy)},
            "block fancy"),

        // And so on...
        h("div", 
            {"style": S(block, shadow)},
            "block shadow"),

        // And so on...
        h("div", 
            {"style": S(block, wiggle(16))},
            "block wiggle(16)"),

        h("div", 
            {"style": S(block, trippy())},
            "block trippy"),

        h("div", 
            {"style": S(block, shadow, wiggle(4))},
            "block shadow wiggle(4)"),

        h("div", 
            {"style": S(block, shadow, fancy)},
            "block shadow fancy"),

        h("div", 
            {"style": S(block, fancy, trippy(), wiggle(20))},
            "block fancy trippy wiggle(20)"),

        h("div", 
            {"style": S(block, circle(40))},
            "circle(40)"),

        h("div", 
            {"style": S(block, shadow, circle(70))},
            "shadow circle(70)"),

        h("div", 
            {"style": S(block, fancy, circle(100))},
            "fancy circle(100)"),

        h("div", 
            {"style": S(block, circle(40+sin(t*7)*10))},
            "circle(??)"),

        h("div", 
            {"style": S(block, wiggle(10), shadow, circle(100))},
            "wiggle(10) shadow circle(100)"),

        h("div", 
            {"style": S(block, fancy, circle(120+sin(t)*30))},
            "fancy circle(??)"),

        h("div", 
            {"style": S(block, trippy(), circle(120+sin(t*7)*20), shadow, fancy, wiggle(26))},
            "EVERYTHING LOLOLO"),

        h("div", 
            {"style": S(block, fancy, follow_mouse())},
            "block fancy follow_mouse")]);

};
