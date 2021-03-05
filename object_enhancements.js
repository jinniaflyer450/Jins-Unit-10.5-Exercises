// ES5 function 1

//function createInstructor(firstName, lastName){
//    return {
//      firstName: firstName,
//      lastName: lastName
//    }
//  }

//ES2015 function 1

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  //ES5 function 2

//  var favoriteNumber = 42;

//var instructor = {
//  firstName: "Colt"
//}

//instructor[favoriteNumber] = "That is my favorite!"

//ES2015 function 2

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

//ES5 function 3

//var instructor = {
//    firstName: "Colt",
//    sayHi: function(){
//      return "Hi!";
//    },
//    sayBye: function(){
//      return this.firstName + " says bye!";
//    }
//  }

//ES2015 function 3

const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  //Write a createAnimal function that generates an object with the species of the animal, a verb used to name a function, and a string to be printed when the verb-named function is called.

  function createAnimal(species, noiseVerb, noiseNoun){
      return{
          species,
          [noiseVerb](){
              return `The ${[species]} says ${[noiseNoun]}.`
            }
        }
    }