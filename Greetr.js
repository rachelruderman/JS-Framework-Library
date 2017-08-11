//step 1: create a new execution context to keep the code secure

(function(global, $){

  //I'm going to return new and use a function constructor to generate the object so I don't always have to set up the object with the new keyword
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language)
  }

  //this is where we'll put any methods that we want to use
  Greetr.prototype = {}

  //this is the function constructor that builds an object and gives it 3 properties. It sets its value if you pass something into the function constructor, otherwise it sets some defaults
  //this needs to point to Greetr.prototype as its prototype. As is, it points to Greetr.init.prototype, but we want it to point to Greetr.prototype
  Greeter.init = function(firstName, lastName, language){
    var self = this;
    self.firstName = firstName || ''
    self.lastName = lastName || ''
    self.language = language || ''
  }

  Greetr.init.prototype = Greetr.prototype

}(window, $))
