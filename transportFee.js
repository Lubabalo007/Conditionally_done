const assert = require ('assert');
var transportFee = function (Shift){
switch (Shift){
case 'morning' :
  // console.log ('morning');
   return "R20";

   case "afternoon":
     //console.log ('afternoon')
     return "R10";

  default :
   return "you pay nothing";
    //console.log ('nightshift')
  }

}

assert.equal(transportFee('morning'),'R20');
assert.equal(transportFee('afternoon'),'R10');
assert.equal(transportFee('nightshift'),'you pay nothing');
