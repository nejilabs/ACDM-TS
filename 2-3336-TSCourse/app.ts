//Declaring Objects
const person:{
  name:string,
  age:number,
  hobbies:string[]
}={
  name: 'Name',
  age: 10,
  hobbies: ['hobby1','hobby2']

}
//Accessing attribute from object
console.log(person.name);

// Declaring Arrays with Mixed Types
let favoriteActivities:any[];
favoriteActivities = ['activity1',1]

//for loop on each hobby name
for(const hobby of person.hobbies){
  console.log(hobby);
}