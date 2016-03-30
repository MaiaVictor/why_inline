module.exports = (function(){
    function id(x){
        return x;
    };
    function konst(x){
        return function(y){
            return x;
        };
    };
    function comp(f,g){
        return function(x){
            return f(g(x));
        };
    };
    function sequence(fs){
        var l = fs.length;
        return function(x){
            for (var i=0; i<l; ++i)
                x = fs[i](x);
            return x;
        };
    };
    function compose(fs){
        var l = fs.length;
        return function(x){
            for (var i=l-1; i>=0; --i)
                x = fs[i](x);
            return x;
        };
    };
    function apply(fn,arr){
        return fn.apply(null, arr);
    };
    function curry(fn){
        var arity = fn.length;
        return (function f(args){
            return function(x){
                var new_args = args.concat(x);
                if (new_args.length === arity)
                    return fn.apply(null, new_args);
                else
                    return f(new_args);
            };
        })([]);
    };
    function not(fn){
        return function(x){
            return !fn(x);
        };
    };
    return {
        id       : id,
        not      : not,
        compose  : compose,
        sequence : sequence,
        apply    : apply,
        konst    : konst,
        comp     : comp,
        apply    : apply,
        curry    : curry};
})();
