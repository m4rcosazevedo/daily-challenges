// The observer design pattern is handy in a place where objects communicate with other sets of objects simultaneously. In this observer pattern, there is no unnecessary push and pull of events across the states, rather the modules involved only modify the current state of data.

function Observer() {
  this.observerContainer = [];
}
  
Observer.prototype.subscribe = function (element) {
  this.observerContainer.push(element);
}
  
// the following removes an element from the container
Observer.prototype.unsubscribe = function (element) {
  const elementIndex = this.observerContainer.indexOf(element);
  if (elementIndex > -1) {
    this.observerContainer.splice(elementIndex, 1);
  }
}
  
/**
* we notify elements added to the container by calling
* each subscribed components added to our container
*/
Observer.prototype.notifyAll = function (element) {
  this.observerContainer.forEach(function (observerElement) {
    observerElement(element);
  });
}
