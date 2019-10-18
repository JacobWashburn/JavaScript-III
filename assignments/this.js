/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When calling 'this' in a function that's in the global scope without calling an object it is bound to the window. 
* 2. Implicit Binding: When you call a function and '.' is before it, 'this' refers to the object before the '.'.
* 3. New Binding: When 'new' is used, 'this' refers to the Object that's being created.
* 4. Explicit Binding: When methods like 'call' or 'apply' are used,'this' refers to the argument passed to them.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding() {
   console.log(this)
}
windowBinding()
//also
console.log(this)


// Principle 2

// code example for Implicit Binding
const implicitBinding = {
   salutation: 'Good morning',
   speak: function (name) {
      console.log(`${this.salutation} ${name}`)
   }
}

implicitBinding.speak('Jacob')


// Principle 3

// code example for New Binding
function newBinding(attributes) {
   this.name = attributes.name,
      this.occupation = attributes.occupation
      
}
const person = new newBinding({ name: 'jcaob', occupation: 'hairdresser' })
 console.log(person.name)


 // Principle 4

// code example for Explicit Binding
function explicitBinding() {
   console.log(`this is my name: ${this.name}`);
}

const nameContainer = {
   name: "Jacob"
}
   
nameCall = explicitBinding.bind(nameContainer) 

nameCall()