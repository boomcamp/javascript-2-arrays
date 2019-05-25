/*
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var arr = [10,20,30];
// Do not edit the code above.

/*
  Create a function named 'first' that is given 'arr' as an argument.
  Return the first item in the given array.
*/

//Code Here
function first(arr) {
  return arr.shift();
}

////////// PROBLEM 2 //////////

// Do not edit the code below.
var arr = [40,50,60];
// Do not edit the code above.

/*
  Create a function named 'last' that is given 'arr' as an argument.
  Return the last item in the given array.
*/

//Code Here
function last(arr) {
  return arr.pop();
}

////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ['Aodhan', 'Haley', 'Finn', 'Reid'];
// Do not edit the code above.

/*
  Create a function named 'looper' that is given family as it's only argument.
  Loop through the given array and alert every item in the array.
*/

//Code Here
function looper(family){
  for(var a = 0; a < family.length; a++){
    alert(family[a]);
  }
}

////////// PROBLEM 4 //////////

// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Write a function called reversedLooper that is given letters as it's only argument.
  Loop backwards, starting at the end of the letters array, alerting every item in the array.
*/

//Code Here
function reversedLooper(letters){
  for(var b = letters.length; b > 0; b--){
    alert(letters[b-1]);
  }
}

////////// PROBLEM 5 //////////

// Do not edit the code below.
var nums = [1,2,3,6,22,98,45,23,22,12];
// Do not edit the code above.

/*
  Write a function named evenFinder that is given nums as it's only argument.
  Return an array that contains the even numbers from the nums array.
*/

//Code Here
function evenFinder(nums){
  let arr = [];
  for (var i in nums){
    if((nums[i] % 2) == 0){
      arr.push(nums[i]);
    }
  }
  return arr;
}
////////// PROBLEM 6 //////////

// Do not edit the code below.
var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
// Do not edit the code above.

/*
  Write a function called divider that is given one argument, numbersArray.
  Have divider return an array with the first item in the array being the evens array (all the even values from numbersArray)
  and the second item in the array being the odds array (all the odd values from numbersArray).
*/

//Code Here
function divider(numbersArray){
  let aarr = [];
  let barr = [];
  let carr = [];
  for (var i in numbersArray){
    if((numbersArray[i] % 2) == 0){
      aarr.push(numbersArray[i]);
    }
    else{
      barr.push(numbersArray[i]);
    }
  }
  carr.push(aarr);
  carr.push(barr);
  return carr;
}
////////// PROBLEM 7 //////////

// Do not edit the code below.
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * 30);
};
// Do not edit the code above.

/*
  var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
  Above you're given a function (getRandomArbitrary) that will return a random number between 0 and 30.
  There is also a commented out array full of numbers to help you visualize what your function will be receiving.
  Write a function named finder that will take in an array as an argument.
  In the function create a variable called randomNumber and set it to the invocation of getRandomArbitrary.
  Loop through the array to see if randomNumber is in the array.
  If it is, return true, if it's not, return false
*/

//Code Here
var ind = [30, 2, 6, 17, 22, 11, 10, 1, 9, 0];
function finder(result) {
  var randomNumber = getRandomArbitrary();
  for (var x in ind){
    if(randomNumber == ind[x]){
      return true;
    }
  }
  return false;
}
////////// PROBLEM 8 //////////

// Do not edit the code below.
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
// Do not edit the code above.

/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the second is an item to remove from myGroceryList.
  If the second argument (or the item to add or remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list.
  In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.

  In both removeItem and addItem check to see if the 'myGroceryList' and 'item' arguments are truthy.
  If they are not, return an empty array.

  Here are some examples of calling your functions and what should be returned:
  removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
  addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
  removeItem(myGroceryList) --> [];
  addItem() --> [];
*/

//Code Here
function removeItem(newGroceryList, item){
  for(let a in myGroceryList){
    if(isNaN(item)){
      if(myGroceryList[a] === item){
        myGroceryList.splice(a, 1);
        return myGroceryList;
      }
      else if(item == undefined){
        return [];
      }
      else{
        return myGroceryList;
      }
    }
  }
}

function addItem(newGroceryList, item){
  if(newGroceryList !== null && item !== null){
    for(let a in myGroceryList){
      if(isNaN(item) && item === null){
        if(item != myGroceryList[a]){
          myGroceryList.push(item);
          return myGroceryList;
        }
        else if(item == undefined){
          return [];
        }
      }
      else{
        return myGroceryList;
      }
    }
  }
  else{
    return myGroceryList;
  }
}


////////// PROBLEM 9 //////////

/*
  Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.
*/

//Code Here
function maker(){
  arrs = [];
  for(let x = 1; x < 216; x++){
    arrs.push(x);
  }
  return arrs;
}

////////// PROBLEM 10 //////////

// Do not edit the code below.
var numbers = [5, '9', 16, 19, '25', '34', 48];
// Do not edit the code above.

/*
  Write a function called addTen that is given 'numbers' as it's only argument.
  Return a new array after adding ten to each item in numbers.
  Your output should look like this -> [15, 19, 26, 29, 35, 44, 58]
*/

//Code Here
function addTen(){
  tens = [];
  for (let x in numbers){
    tens.push(parseInt(numbers[x])+10);
  }
  return tens;
}

////////// PROBLEM 11 //////////

// Do not edit the code below.
var num1 = Math.floor(Math.random() * 30);
var num2 = Math.floor(Math.random() * 30);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
// Do not edit the code above.

/*
  Above is some code that adds a random number of values to both arr1 and arr2.
  Write a function called 'longer' that is given arr1 and arr2 as it's only arguments.
  Return the longer of the two arrays.
*/

//Code Here
function longer(){
  if(arr1.length > arr2.length){
    return arr1;
  }
  else{
    return arr2;
  }
}

/*
  As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
  'both' should return a new array with the matching numbers found in both arr1 and arr2.

  Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

//Code Here
function both(){
  newArray = [];
  for(let a in arr1){
    for(let b in arr2){
      if(arr1[a] === arr2[b]){
        newArray.push(arr1[a]);
      }
    }
  }
  return newArray;
}
////////// PROBLEM 12 //////////

// Do not edit the code below.
var employees = [];

var joe = {
    name: 'Joe',
    position: 'Instructor',
    spiritAnimal: 'Honey Badger'
};

var jim = {
    name: 'Jim',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var tom = {
    name: 'Tom',
    position: 'Sales',
    spiritAnimal: 'horse'
};
// Do not edit the code above.

/*
  Above you're given an empty array and four variables containing objects.
  Fill the employees array with those four objects.
  After that console.log the length of the Array and make sure that it's equal to 4.
*/

//Code Here
employees.push(joe);
employees.push(jim);
employees.push(ryan);
employees.push(tom);
console.log(employees.length);
/*
  Now let's say Jim has to take a leave of absence.
  Loop through your employees until you find jim, then remove him from the array.
*/

//Code Here
for(let x in employees){
  if(employees[x] === jim){
    employees.splice(x, 1);
  }
}
////////// PROBLEM 13 //////////


/*
  A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of data is to have an array full of objects.
  Create an empty array called users.
*/

//Code Here
var users = [];

/*
  Now add three user objects to your users array. Each user object should contain the following properties. name, email, password, username.

  Include the following user1 object as one of the objects in your array.
*/

// Do not edit the code below.
var user1 = {
    name: 'Mark Mouser',
    email: 'mark@boom.camp',
    password: 'hunter2',
    username: 'ihazcode'
};
// Do not edit the code above.

//Code Here
var user2 = {
  name: 'User Two',
  email: 'usertwo@boom.camp',
  password: 'user2',
  username: 'userTwo'
}
var user3 = {
  name: 'User Three',
  email: 'userthree@boom.camp',
  password: 'user3',
  username: 'userThree'
}
var user4 = {
  name: 'User Four',
  email: 'userFour@boom.camp',
  password: 'user4',
  username: 'userFour'
}

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

/*
  Now you have a very common data structure.
  Twitter is a good use case.
  It's easy to imagine that your followers list on Twitter is an array full of objects and those objects contain properties about the specific person you follow.

  Now let's say that Mark decided to delete his account.
  Loop through your array of objects until you find Mark's account (use his email, mark@boom.camp, to find him).
  Once you find the array index he's located in, delete him from the array.
*/

//Code Here
for(let x in users){
  if(users[x].email === 'mark@boom.camp'){
    users.splice(x, 1);
  }
}

/*
  The activity we just did is very much how data works in 'the real world'.
*/
