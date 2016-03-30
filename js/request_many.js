var request = require("superagent");
f = module.exports = function(urls, callback){
    var result  = {};
    var loaded  = 0;
    var total   = Object.keys(urls).length;
    for (var name in urls){
        (function(name){
            var url = urls[name];
            request.get(url).end(function(err, res){
                result[name] = res.text;
                if (++loaded === total)
                    callback(result);
            });
        })(name);
    };
};
