k = module.exports = (function(){
    // Applies a function to each element of an array.
    function map(fn,arr){
        var result = [];
        for (var i=0, l=arr.length; i<l; ++i)
            result[i] = fn(arr[i]);
        return result;
    };

    function imap(fn,arr){
        var result = [];
        for (var i=0, l=arr.length; i<l; ++i)
            result[i] = fn(i,arr[i]);
        return result;
    };

    // flatten :: ∀ a . [[a]] -> [a]
    function flatten(arr){
        var result = [];
        for (var i=0, l=arr.length; i<l; ++i){
            var subArr = arr[i];
            for (var si=0, sl=subArr.length; si<sl; ++si)
                result.push(subArr[si]);
        };
        return result;
    };

    // The usual right fold over arrays.
    // foldr :: ∀ a . (a -> r -> r) -> r -> Arr a -> r
    function foldr(cons,nil,arr){
        var result = nil;
        for (var i=0, l=arr.length; i<l; ++i)
            result = cons(arr[i],result);
        return result;
    };

    // The usual left fold over arrays.
    // foldl :: ∀ a . (r -> a -> r) -> r -> Arr a -> r
    function foldl(snoc,nil,arr){
        var result = nil;
        for (var i=arr.length-1; i>=0; --i)
            result = snoc(result,arr[i]);
        return result;
    };

    // Creates an array with `times` copy of `value`.
    // replicate :: ∀ a . Int -> a -> Arr a
    function replicate(times, value){
        var result = [];
        for (var i=0; i<times; ++i)
            result.push(value);
        return result;
    };

    // Creates an array with `times` copy of `value`.
    // zip_with :: ∀ a . (a -> b -> c) -> Arr a -> Arr b -> Arr c 
    function zip_with(fn, a, b){
        var result = [];
        for (var i=0, l=a.length; i<l; ++i)
            result.push(fn(a[i],b[i]));
        return result;
    };

    // Applies a function to a list of arguments.
    function apply(fn,arr){
        return fn.apply(this,arr);
    };

    // Sort
    function sort(fn,arr){
        return arr.slice(0).sort(function(a,b){ return fn(a,b) ? -1 : 1});
    };

    // Maximum
    function maximum(arr){
        return foldr(Math.max, -Infinity, arr);
    };

    // Minimum
    function minimum(arr){
        return foldr(Math.min, Infinity, arr);
    };

    function find_index(fn,arr){
        for (var i=0, l=arr.length; i<l; ++i)
            if (fn(arr[i]))
                return i;
        return null;
    };

    function concat(a,b){
        var c = [];
        for (var i=0,l=a.length; i<l; ++i)
            c.push(a[i]);
        for (var i=0,l=b.length; i<l; ++i)
            c.push(b[i]);
        return c;
    };

    function tail(a){
        return a.slice(0,a.length-1);
    };

    function init(a){
        return a.slice(1);
    };

    function add(a,b){
        var c = [];
        for (var i=0,l=a.length; i<l; ++i)
            c[i] = a[i]+b[i];
        return c;
    };

    function any_gt(a,b){
        for (var i=0,l=a.length; i<l; ++i)
            if (a[i] > b[i])
                return true;
        return false;
    };

    function any_lt(a,b){
        for (var i=0,l=a.length; i<l; ++i)
            if (a[i] < b[i])
                return true;
        return false;
    };

    function any_gte(a,b){
        for (var i=0,l=a.length; i<l; ++i)
            if (a[i] >= b[i])
                return true;
        return false;
    };

    function any_lte(a,b){
        for (var i=0,l=a.length; i<l; ++i)
            if (a[i] <= b[i])
                return true;
        return false;
    };

    function all(cond, arr){
        for (var i=0, l=arr.length; i<l; ++i)
            if (!cond(arr[i]))
                return false;
        return true;
    };

    function all_equal_to(val, arr){
        for (var i=0, l=arr.length; i<l; ++i)
            if (val !== arr[i])
                return false;
        return true;
    };

    function any(cond, arr){
        for (var i=0, l=arr.length; i<l; ++i)
            if (cond(arr[i]))
                return true;
        return false;
    };

    function all_gt(a,b){
        for (var i=0,l=a.length; i<l; ++i)
            if (a[i] <= b[i])
                return false;
        return true;
    };

    function all_lt(a,b){
        for (var i=0,l=a.length; i<l; ++i)
            if (a[i] >= b[i])
                return false;
        return true;
    };

    function all_gte(a,b){
        for (var i=0,l=a.length; i<l; ++i)
            if (a[i] < b[i])
                return false;
        return true;
    };

    function all_lte(a,b){
        for (var i=0,l=a.length; i<l; ++i)
            if (a[i] > b[i])
                return false;
        return true;
    };

    function mul(a,b){
        var c = [];
        for (var i=0,l=a.length; i<l; ++i)
            c[i] = a[i]*b[i];
        return c;
    };

    function sub(a,b){
        var c = [];
        for (var i=0,l=a.length; i<l; ++i)
            c[i] = a[i]-b[i];
        return c;
    };

    function div(a,b){
        var c = [];
        for (var i=0,l=a.length; i<l; ++i)
            c[i] = a[i]/b[i];
        return c;
    };


    function dist(a,b){
        var d = 0;
        for (var i=0, l=a.length; i<l; ++i)
            d += (a[i]-b[i])*(a[i]-b[i]);
        return Math.sqrt(d);
    };

    function equals(a,b){
        var length = a.length;
        if (length !== b.length)
            return false;
        for (var i=0; i<length; ++i)
            if (a[i] !== b[i])
                return false;
        return true;
    };

    function filter(cond, arr){
        var res = [];
        for (var i=0, l=arr.length; i<l; ++i){
            var element = arr[i];
            if (cond(element))
                res.push(element);
        };
        return res;
    };

    function generate(size,fn){
        var result = [];
        for (var i=0; i<size; ++i)
            result[i] = fn(i);
        return result;
    };

    function sum(arr){
        var s = 0;
        for (var i=0, l=arr.length; i<l; ++i)
            s += arr[i];
        return s;
    };

    function chunks_of(n,arr){
        var result = [];
        var chunk  = [];
        for (var i=0, l=arr.length; i<l; ++i){
            chunk.push(arr[i]);
            if (i%n === (n-1) || i == l-1){
                result.push(chunk);
                chunk = [];
            };
        };
        return result;
    };

    function range(n){
        var result = [];
        for (var i=0; i<n; ++i)
            result.push(i);
        return result;
    };

    return {
        any_gt       : any_gt,
        any_gte      : any_gte,
        any_lt       : any_lt,
        any_lte      : any_lte,
        all_gt       : all_gt,
        all_gte      : all_gte,
        all_lt       : all_lt,
        all_lte      : all_lte,
        all_equal_to : all_equal_to,
        any          : any,
        all          : all,
        add          : add,
        sub          : sub,
        div          : div,
        dist         : dist,
        apply        : apply,
        concat       : concat,
        find_index   : find_index,
        flatten      : flatten,
        sort         : sort,
        foldl        : foldl,
        sum          : sum,
        foldr        : foldr,
        init         : init,
        map          : map,
        equals       : equals,
        imap         : imap,
        chunks_of    : chunks_of,
        filter       : filter,
        mul          : mul,
        generate     : generate,
        maximum      : maximum,
        range        : range,
        minimum      : minimum,
        replicate    : replicate,
        tail         : tail,
        zip_with     : zip_with};
})();
