/* global describe, it */


(function () {
    'use strict';

    describe('Manipulating Data with underscore.js methods', function () {
      var people = [{name: 'mason', age: 18, weight: 170},{name: 'emily', age: 17, weight: 100},{name: 'jim', age: 11, weight: 85}];

        describe('_.pluck', function () {
          it("should expect _.pluck to create an array of ages", function(){
            expect(_.pluck(people,'age')).to.deep.equal([18,17,11]);
          });
          it("should expect ages to be an equal _.pluck", function (){
            var ages = _.pluck(people,'age');
            expect(ages).to.deep.equal(_.pluck(people,'age'));
          });
          it("should expect _.pluck to create an array of weights",function(){
            expect(_.pluck(people,'weight')).to.deep.equal([170,100,85]);
          });
          it("should expect weights to be an equal to the plucked data",function(){
            var weights = _.pluck(people, 'weight');
            expect(weights).to.deep.equal(_.pluck(people,'weight'));
          });
          it("should expect _.pluck to give an empty array becuase there is no argument given",function(){
            expect(_.pluck()).to.deep.equal([])
          });
        });

        describe('_.first',function (){
          it("should take the first age in the array",function(){
            var ages = _.pluck(people,'age');
            expect(_.first(ages)).to.equal(18);
          });
          it("should take the first weight in the array",function(){
            var weights = _.pluck(people,'weight');
            expect(_.first(weights)).to.equal(170);
          });
          it("should expect that when no argument is entered into _.first() it will result in undefined",function(){
            expect(_.first()).to.equal(undefined);
          });
          it("should expect that when a string is entered for the argument in _.first() it will result in the first letter of that string",function(){
            expect(_.first("boop")).to.equal("b");
          });
        });

        describe("_.last",function(){
          it("should take the last age in the array",function(){
            var ages = _.pluck(people,'age');
            expect(_.last(ages)).to.equal(11);
          });
          it("should take the last weight in the array",function(){
            var weights = _.pluck(people,'weight');
            expect(_.last(weights)).to.equal(85);
          });
          it("should expect that when no argument is entered into _.last() it will result in undefined",function(){
            expect(_.last()).to.equal(undefined);
          });
          it("should expect that when a string is entered for the argument in _.last() it will result in the last letter of that string",function(){
            expect(_.last("boop")).to.equal("p");
          });
        });

        describe("_.size",function(){
          it("should expect that when you call _.size on an array it will give you the number of items in the array",function(){
            expect(_.size(people)).to.equal(3);
          });
          it("should expect that when you call _.size on a string it will return the amount of characters that string contains",function(){
            expect(_.size("boop")).to.equal(4);
          });
          it("should expect that when you call _.size on a boolean it will return 0",function(){
            expect(_.size(true)).to.equal(0);
          });
        });

        describe("_.contains",function(){
          it("should expect that when you call _.contains on an array of numbers and search for that number. If the array contains it, it will output a boolean true",function(){
            var ages = _.pluck(people,'age');
            expect(_.contains(ages, 17)).to.equal(true);
          });
          it("should expect that when you call _.contains on an array of numbers and search for that number. If the array does not contain it, it will output a boolean false",function(){
            var ages = _.pluck(people,'age');
            expect(_.contains(ages,99)).to.equal(false);
          });
          it("should expect that when you call _.contains on an array of names and search for a specific name. If the array contains the name, it will output a boolean true.",function(){
            var names = _.pluck(people,'name');
            expect(_.contains(names,'mason'))
          });
          it("should expect that when you call _.contains on an array of names and search for a specific name. If the array does not contain the name, it will output a boolean false.",function(){
            var names = _.pluck(people,'name');
            expect(_.contains(names,'jack')).to.equal(false);
          });
        });
        describe("_.random",function(){
          it("should expect that when you call _.random with an argument of 0 and another number, it will output a number between those two arguments",function(){
            expect(_.random(0, 1000)).to.be.within(0, 1000);
          });
          it("should expect that when only one argument is passed, it will display a random number between 0 and that number",function(){
            expect(_.random(122)).to.be.within(0,122);
          });
        });
        describe("_.isString",function(){
          it("should expect that when you call _.isString on a string it will output a boolean true",function(){
            expect(_.isString("deep")).to.equal(true);
          });
          it("should expect that when you call _.isString on a non-string it will output a boolean false",function(){
            expect(_.isString(5)).to.equal(false);
          });
        });
        describe("_.clone",function(){
          it("should expect that when _.clone is called on an array it will return a copied version of the array",function(){
            expect(_.clone(people)).to.deep.equal(people);
          });
          it("should expect that when _.clone is called on a string it will return a copied version of that exact string",function(){
            expect(_.clone("deep")).to.equal("deep");
          });
          it("should expect that when _.clone is called on an object it will return a copied version of that exact object, properties and all",function(){
            expect(_.clone({name: "joe"})).to.deep.equal({name: "joe"});
          });
        });
    });


})();
//
// (function (){
//   (function(){
//   _ = {};
//   _.pluck = function(obj,key){
//     if(!obj,!key){
//       throw new Error("_.pluck function requres an argument");
//     } else if(!Array.isArray(obj)){
//       throw new Error("_.pluck needs an array as the first argument");
//     } else{
//         return _.map(obj, _.property(key));
//     }
//   }
//
//   var people = [{name: 'mason', age: 18, weight: 170},{name: 'emily', age: 17, weight: 100},{name: 'jim', age: 11, weight: 85}];
//
//   describe("New Method Creation",function(){
//     describe("New _.pluck",function(){
//       it("should expect that when passed two parameters it returns an array",function(){
//         expect(_.pluck(people, 'age')).to.deep.equal([18,17,11]);
//       });
//     });
//   });
// })()
// })();
