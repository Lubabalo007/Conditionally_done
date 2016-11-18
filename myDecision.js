
const assert = require('assert');
var myDecision = function (eatWhat){
switch(eatWhat){
 case 'Meat':
   //console.log ('Meat');
  return "expensive";
case "Burger":
    //console.log ('Burger');
  return "unhealthy";
default:
  return "cheap and healthy";
    //console.log ('vegitables')
}
}
assert.equal(myDecision('Meat'), 'expensive');
assert.equal(myDecision('Burger'), 'unhealthy');
assert.equal(myDecision('vegitables'), 'cheap and healthy');
