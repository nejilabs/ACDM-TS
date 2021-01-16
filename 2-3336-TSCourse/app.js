//Declaring Objects
var person = {
    name: 'Name',
    age: 10,
    thisArray: ['hobby1', 'hobby2'],
    thisTuple: [1, 'String'] //tuple
}; //object
// person.tuple[1] = 2; //will produce error
person.thisTuple.push('AnotherString'); //this one will work as long as it matches any type contained in the tuple.
for (var _i = 0, _a = person.thisArray; _i < _a.length; _i++) {
    var eachElement = _a[_i];
    console.log(eachElement);
}
for (var _b = 0, _c = person.thisTuple; _b < _c.length; _b++) {
    var eachElement = _c[_b];
    console.log(eachElement);
}
