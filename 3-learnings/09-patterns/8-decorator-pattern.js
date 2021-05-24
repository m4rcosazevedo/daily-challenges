function MacBook() {
  this.cost = function() {
    return 997;
  };
  this.screenSize = function() {
    return 11.6;
  };
}

// Decorator 1

function Memory(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };
}

// Decorator 2

function Engraving(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 200;
  };
}

// Decorator 3

function Insurance(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 250;
  };
}

var mb = new MacBook();

Memory(mb);
Engraving(mb);
Insurance(mb);

const result = mb.cost(); // 1522
console.log(result)