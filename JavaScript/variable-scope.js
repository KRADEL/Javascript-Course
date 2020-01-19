// Global Scope
var userObj = {
    email: 'sample@example.com',
    fullName: 'Kristine Hudgens'
  }
  
// Local scope
  function dashboardGreeting() {
    var userObj = { //Remove var inside a function to create a global variable
      email: 'sample2@example.com',
      fullName: 'Jordan Hudgens'
    }
    console.log("Hi there, ".concat(userObj.fullName));
  }
  
  dashboardGreeting();
  console.log(userObj.fullName);