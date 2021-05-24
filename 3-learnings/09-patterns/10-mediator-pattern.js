// each participant represented by Participant object
class Participant {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  receive (message, from) {
    console.log({ message, from })
  }
}
  
 // Mediator
class Chatroom {
  constructor() {
    this.participants = {};
  }
  
  register(participant) {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
    return this
  }

  send(message, from, to) {
    if (to) {
      // single message
      to.receive(message, from);
    } else {
      // broadcast message to everyone
      for (const key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from);
        }
      }
    }
  }
}
  
 // usage
 // Create two participants  
const john = new Participant('John');
const snow = new Participant('Snow');

 // Register the participants to Chatroom
const chatroom = new Chatroom();

const John = chatroom.register(john);
const Snow = chatroom.register(snow);

 // Participants now chat with each other
John.send('Hey, Snow!', snow);
John.send('Are you there?', snow);
Snow.send('Hey man', john);
Snow.send('Yes, I heard that!', john);

// https://beforesemicolon.medium.com/10-javascript-design-patterns-to-improve-your-code-with-44c6f6c2ea94