/**
 * Created by Isaac on 6/5/2015.
 */
var nonPositiveValidationRule = require('./rules/nonPositive'),
    nonDivisibleValidationRule = require('./rules/nonDivisible');
    validationRules = [
        nonPositiveValidationRule,
        nonDivisibleValidationRule(3, 'error.three'),
        nonDivisibleValidationRule(5, 'error.five')
    ];

module.exports = function (n){
   return validationRules.reduce(function(result, rule){
       rule(n, result);
       return result;
   }, [])
};