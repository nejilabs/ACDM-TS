//Declaring Objects
const person:{ 
  name:string,
  age:number,
  thisArray:string[],
  thisTuple:[number,string]
}={
  name: 'Name', //string
  age: 10, //number
  thisArray: ['hobby1','hobby2'], //array
  thisTuple: [1,'String'] //tuple
} //object


// person.tuple[1] = 2; //will produce error
person.thisTuple.push('AnotherString'); //this one will work as long as it matches any type contained in the tuple.

for(const eachElement of person.thisArray){
  console.log(eachElement);
}

for(const eachElement of person.thisTuple){
  console.log(eachElement);
}