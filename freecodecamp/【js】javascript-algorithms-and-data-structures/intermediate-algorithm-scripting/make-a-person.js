const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName, lastName;
  this.setFullName = function(firstAndLast) {
    [firstName, lastName] = firstAndLast.split(' ');
  }
  if(firstAndLast) {
    this.setFullName(firstAndLast);
  }
  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.getLastName = function() {
    return lastName;
  }
};

const bob = new Person('Bob Ross');
bob.getFullName();