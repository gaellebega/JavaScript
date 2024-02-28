// today we are going to focus on datatypes and variables//
/*const age= 18;
const myName= "gaga";
const isSheAgirl="true"
const array=["string",12,false];
console.log(" my Name is " + myName + " and am " + age + " years old ")
console.log(array);
console.log(myfavfood);
// variable declaration and definition//

// understanding difference btn var let and const//

function mylastName(){
 let me ="bega";   
console.log(me);
}

mylastName();*/
let person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
};

// Using for...in to loop through each property of the person object and print it
for (let key in person) {
    console.log(key + ': ' + person[key]);
}
// let obj = {
// citizen : {
// men : 5;
// women:10;


// }
let array =
 [[2,3,7,8,9],
 [1,3,2,8],
 [0,4,6,14,26]];
 console.log(array[2][4]);

let primary = {
         p4 :{
            names:37,
         },
        p5 :{
            age : 12,

            },
            };
        console.log(primary.p4.names);


  let group = {
    hardworkers : {
        teen : 30,
    },
    lazy : {
        older : 20,
    },
  };
  console.log(group.hardworkers.teen);
  console.log(group.lazy.older);  

let room = ["fofo","gaga","nana","sisi"];
room.push("mumu");
console.log(room);

let room2 = ["fofo","gaga","nana","sisi"];
room2.pop();
room2.pop();
console.log(room2);

let room3 =  ["fofo","gaga","nana","sisi"];
let newroom = room3 [1];
console.log(newroom);

let room4 = ["fofo","gaga","nana","sisi"]
let  isfofoIncluded = room4.includes("fofo");
let islalaIncluded = room4.includes("lala")
console.log(isfofoIncluded);
console.log(islalaIncluded);
          
for(let i = 0; i<room.length; i++){
    console.log(room[i]);
}

let group1 = [70,60,4,5,6];
let doubleNumbers = group1.map (num => num*3);
console.log(doubleNumbers);

let map = [1,2,3,4,5,6,7,8,9,10];
let oddnumbers = map.filter(num=> num%2 !==0);
console.log(oddnumbers);


let numbers=[12,3];
let sum = numbers.reduce((acc,num) => acc + num,0);
console.log(sum);

let numbersdifferent=[3,4,5,1,-3,0,-7]
let allpositive = numbersdifferent.every(num => num > 0);
console.log(allpositive);

let indexofnum = room2.indexOf("fofo");
console.log(indexofnum);

let numbers3=[8,4,5,1,0,3];
let sortedNumbers = numbers3.sort((a,b)=>a-b);
console.log(sortedNumbers);

let reversednumbers3 = numbers3.slice(0,3);
console.log(reversednumbers3);

numbers4=[7,8,1,3,2,0,9,10,72]
let reversednumbers4 = numbers4.slice(0,5);
console.log(reversednumbers4);

let firstArray = [1,3,5,6];
let secondArray = [2,4,7,9];
let combineArray = firstArray.concat(secondArray);
console.log( combineArray);

let duplicates = [1,1,2,3,4,5,5];
let uniqueArray = [...new Set(duplicates)];
console.log(uniqueArray);









