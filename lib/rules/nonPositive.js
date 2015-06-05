/**
 * Created by Isaac on 6/5/2015.
 */
module.exports = function nonPositiveValidationRule(n, result){
    if (n<=0)
        result.push('error.nonpositive');
};