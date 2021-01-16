//Declaring Objects
var person = {
    name: 'Name',
    age: 10,
    hobbies: ['hobby1', 'hobby2']
};
//Accessing attribute from object
console.log(person.name);
// Declaring Arrays with Mixed Types
var favoriteActivities;
favoriteActivities = ['activity1', 1];
//for loop on each hobby name
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
