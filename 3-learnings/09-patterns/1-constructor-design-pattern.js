// This is a special method that is used to initialize the newly created objects once a memory is allocated. Since JavaScript is typically object-oriented, it deals with objects most, therefore I intend to delve in to object constructors. There are three ways to create new objects in JavaScript:
// The following is one way to create a constructor design pattern.

const newObject = {}

const newObj = Object.create(Object.prototype)