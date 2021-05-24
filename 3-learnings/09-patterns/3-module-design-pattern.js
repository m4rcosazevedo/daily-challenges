// In the module design pattern, there is an improvement from the prototype pattern. The different types of modifiers (both private and public) are set in the module pattern. You can create similar functions or properties without conflicts. There is the flexibility of renaming functions publicly. The daunting part of this is the inability to override the created functions from the outside environment.

function AnimalContainer () {
  const container = [];
  
  function _addAnimal (name) {
    container.push(name);
  }
  
  function _getAllAnimals() {
    return container;
  }
  
  function _removeAnimal(name) {
    const index = container.indexOf(name);
    
    if(index < 1) {
      throw new Error('Animal not found in container');
    }

    container.splice(index, 1)
  }
  
    return {
    add: _addAnimal,
    get: _getAllAnimals,
    remove: _removeAnimal
    }
  }
  
  const container = AnimalContainer();

  container.add('Hen');
  container.add('Goat');
  container.add('Sheep');
  console.log(container.get()) //Array(3) ["Hen", "Goat", "Sheep"]

  container.remove('Sheep')

  console.log(container.get()); //Array(2) ["Hen", "Goat"]