/**
 * Created by Isaac on 6/5/2015.
 */


module.exports = function(validationRules){
    return function(n){
        return validationRules.reduce(function(result, rule){
            rule(n, result);
            return result;
        }, []);
    };
};