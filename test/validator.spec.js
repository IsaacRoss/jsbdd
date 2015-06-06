/**
 * Created by Isaac on 6/5/2015.
 */
var chai = require('chai'),
    expect = chai.expect,
    validatorWith = require('../lib/validator'),
    nonPositiveValidationRule = require('../lib/rules/nonPositive'),
    nonDivisibleValidationRule = require('../lib/rules/nonDivisible');

describe('A validator', function () {
    var validator;
    context('with the default validation rules', function(){
        beforeEach(function(){
            validator = validatorWith([
                nonPositiveValidationRule,
                nonDivisibleValidationRule(3, 'error.three'),
                nonDivisibleValidationRule(5, 'error.five')
            ]);
        });

        it('will return no errors for valid numbers', function(){
            expect(validator(7)).to.be.empty;
        });

        describe('will include error.nonpositive for not strictly positive numbers', function () {
            willInclude('error.nonpositive', 0);
            willInclude('error.nonpositive', -2);
        });

        describe('will include error.three for divisible by 3 numbers', function () {
            willInclude('error.three', 3);
            willInclude('error.three', 6);
            willInclude('error.three', 15);

        });

        describe('will include error.five for divisible by 5 numbers', function () {
            willInclude('error.five', 5);
            willInclude('error.five', 10);
            willInclude('error.five', 15);
        });
    });
});


/// ------ Helpers
function willInclude(error, num){
    it('like ' + num, function(){
        expect(validator(num)).to.include(error);
    })
}