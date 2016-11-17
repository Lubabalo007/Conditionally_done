var whichPlatform = function(){
    switch(route) {
        case "Langa":
            return "platform 1";
        case "Stellenbosch":
            return "platform 6";
        case "Wynberg":
            return "Platform 2";
        default:
            return "There is no train to " + route;
    }
}

const assert = require('assert');

//fix these asserts
assert.equal(whichPlatform('Langa'), '');
assert.equal(whichPlatform('Stellenbosch'), '');
assert.equal(whichPlatform('Wynberg'), '');
assert.equal(whichPlatform('Parow'), '');
// make sure all the asserts are passing
