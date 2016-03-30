var arr = require("./array.js");
var fun = require("./function.js");
module.exports = (function (){
    // merge :: Obj key val -> Obj key val -> Obj key val
    function merge(a,b){
        var c = {};
        for (var key in a)
            c[key] = a[key];
        for (var key in b)
            c[key] = b[key];
        return c;
    };

    // merge_all :: [Obj key val] -> Obj key val
    function merge_all(objs){
        if (!(objs instanceof Array))
            objs = [].slice.call(arguments, 0);
        var c = {};
        for (var i=0, l=objs.length; i < l; ++i)
            for (var key in objs[i])
                c[key] = objs[i][key];
        return c;
    };

    // insert :: key -> val -> Obj key val -> Obj key val
    function insert(key,val,obj){
        var result = {};
        for (var obj_key in obj)
            result[obj_key] = obj[obj_key];
        result[key] = val;
        return result;
    };

    // update :: key -> (val -> val) -> Obj key val -> Obj key val
    function update(key,fn,obj){
        var result = {};
        for (var obj_key in obj)
            result[obj_key] = obj[obj_key];
        result[key] = fn(result[key]);
        return result;
    };

    function map_key_vals(fn,obj){
        var result = {};
        for (var key in obj){
            var kv = fn(key,obj[key]);
            result[kv[0]] = kv[1];
        };
        return result;
    };

    function map(fn,obj){
        var result = {};
        for (var key in obj)
            result[key] = fn(obj[key]);
        return result;
    };

    // map_key_vals_array :: Obj key val -> (key -> val -> a) -> [a]
    function map_key_vals_array(fn,obj){
        var result = [];
        for (var key in obj){
            result.push(fn(key,obj[key]));
        };
        return result;
    };

    // flat_map_key_vals_array :: Obj key val -> (key -> val -> [a]) -> [a]
    function flat_map_key_vals_array(fn,obj){
        var result = [];
        for (var key in obj){
            var arr = fn(key,obj[key]);
            for (var i=0, l=arr.length; i<l; ++i)
                result.push(arr[i]);
        };
        return result;
    };

    function values(obj){
        var result = [];
        for (var key in obj)
            result.push(obj[key]);
        return result;
    };

    function to_array(obj){
        var result = [];
        for (var key in obj)
            result.push([key,obj[key]]);
        return result;
    };

    function from_mapped_array(fn,arr){
        var result = {};
        for (var i=0, l=arr.length; i<l; ++i){
            var key_val = fn(arr[i]);
            result[key_val[0]] = key_val[1];
        };
        return result;
    };

    function from_imapped_array(fn,arr){
        var result = {};
        for (var i=0, l=arr.length; i<l; ++i){
            var key_val = fn(i,arr[i]);
            result[key_val[0]] = key_val[1];
        };
        return result;
    };

    function index_by_index(elements){
        return from_imapped_array(function(i,element){
            return [i,element];
        },elements)
    };

    function index_by_field(field,elements){
        return from_mapped_array(function(element){
            return [element[field],element];
        },elements)
    };

    function index_by(fn,elements){
        return from_mapped_array(function(element){
            return [fn(element),element];
        },elements)
    };

    function equals(a,b){
        var a_keys = Object.keys(a);
        var b_keys = Object.keys(b);
        if (!arr.equals(a_keys,b_keys))
            return false;
        for (var i=0, l=a_keys.length; i<l; ++i)
            if (a[a_keys[i]] !== b[b_keys[i]])
                return false;
        return true;
    };

    function combine(objs){
        var result = {};
        for (var i=0, l=objs.length; i<l; ++i){
            var obj = objs[i];
            for (var key in obj)
                result[key] = obj[key];
        };
        return result;
    };

    function lookup(key,obj){
        return obj[key];
    };

    function shallow_copy(obj){
        var result = {};
        for (var key in obj)
            result[key] = obj[key];
        return result;
    };

    function filter(fn, obj){
        var result = {};
        for (var key in obj)
            if (fn(obj))
                result[key] = obj;
        return result;
    };

    return {
        map_key_vals            : map_key_vals,
        map_key_vals_array      : map_key_vals_array,
        flat_map_key_vals_array : flat_map_key_vals_array,
        from_mapped_array       : from_mapped_array,
        to_array                : to_array,
        from_imapped_array      : from_imapped_array,
        index_by_index          : index_by_index,
        index_by_field          : index_by_field,
        index_by                : index_by,
        map                     : map,
        filter                  : filter,
        values                  : values,
        shallow_copy            : shallow_copy,
        merge                   : merge,
        merge_all               : merge_all,
        combine                 : combine,
        insert                  : insert,
        lookup                  : lookup,
        update                  : update,
        equals                  : equals,
        get                     : fun.curry(lookup),
        mut                     : fun.curry(update),
        set                     : fun.curry(insert)}
})();
