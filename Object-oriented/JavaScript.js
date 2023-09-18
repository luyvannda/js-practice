function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const joe = new Person("Joe");
joe.name;
joe.introduceSelf();

const jack = new Person("Jack");
jack.name;
jack.introduceSelf();

const myNotification = new Notification("Hello!");