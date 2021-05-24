// The prototype pattern is based on prototypical inheritance whereby objects created to act as prototypes for other objects. In reality, prototypes act as a blueprint for each object constructor created.

const myCar = {
  name: "Ford K",
  brake: () => console.log('Stop!'),
  panic: () => console.log('Wait')
}

const yourCar = Object.create(myCar)

console.log(yourCar.name)
