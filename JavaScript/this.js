// $('.btn-guide').click(function(event) {
//     event.preventDefault();
//     console.log($(this));
// });

// // ------------------------------------------------

// class Person {
//     constructor(name){
//       this.name = name;
//     }
//   }
  
//   const yourPerson = new Person('Ryley');

// ------------------------------------------------

var guide = {
    title: 'Guide to programming',
    content: 'Content will go here',
    visibleToUser: function (viewingUserRole) {
        if (viewingUserRole === 'paid') {
            return true;
        } else {
            return false;
        }
    },
    renderContent: function(userRole) {
        if (this.visibleToUser(userRole)) {
            console.log(this.title + " - " + this.content);
        } else {
            this.content = '';
            console.log(this.title + " - " + this.content);
        }
    }
}

user = {role: 'paid'};
guide.renderContent(user.role);