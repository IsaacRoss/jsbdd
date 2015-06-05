/**
 * Created by Isaac on 6/5/2015.
 */
module.exports = function (divisor, error){
    return function(n, result){
        if (n % divisor === 0){
            result.push(error);
        }
    }
};