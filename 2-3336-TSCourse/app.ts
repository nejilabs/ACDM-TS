const person:{
  name:string,
  age:number,
  hobbies:string[]
}={
  name: 'Name',
  age: 10,
  hobbies: ['hobby1','hobby2']

}

let favoriteActivities:any[];
favoriteActivities = ['activity1',1]

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby);
}