const assert = require('assert');

var fromWhere = function (carRegistration){
switch (carRegistration) {
case 'CY 123':
   return "Bellville";

case 'CJ 246':
  return "Paarl";

case "CA 897":
  return "Cape Town";

default:
    return "Some other place" + carRegistration;

    }
  }
assert.equal(fromWhere('CY 123'),'Bellville');
assert.equal(fromWhere('CJ 246'),'Paarl');
  assert.equal(fromWhere('CA 897'),'Cape Town');
