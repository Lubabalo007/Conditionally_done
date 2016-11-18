
const assert = require('assert');
var whichPlatform = function(route){
    switch(route) {
        case 'Langa':
            return "Platform 1";
        case 'Stellenbosch':
            return "Platform 6";
        case 'Wynberg':
            return "Platform 2";
        default:
            return "There is no train to " + route;
    }
}

//fix these asserts
assert.equal(whichPlatform('Langa'), 'Platform 1');
assert.equal(whichPlatform('Stellenbosch'), 'Platform 6');
assert.equal(whichPlatform('Wynberg'), 'Platform 2');
// make sure all the asserts are passing
