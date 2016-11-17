const assert = require('assert')
var weekOrWeekend = function (day) {
if (day.startsWith("W")){
  return "week"
}
else {
  return "weekend"
}
}
console.log(weekOrWeekend('Wednsday'));
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');
