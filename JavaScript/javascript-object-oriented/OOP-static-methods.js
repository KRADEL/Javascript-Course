class Instructor {
    constructor({ name, role = 'assistant' }) {
        this.name = name;
        this.role = role;
    }
// Instance Method(specific to the instantiated object; hence this keyword)
    renderDetails() {
        console.log(`${this.name}: ${this.role}`);
    }
// Static Method / Helper Method(Not specific to the instance)
    static helloWorld() {
        console.log('Hi there!');
    }

    static canTeach(Instructor) {
        return (Instructor.role === 'classroom');
    }
}

// Instructor.helloWorld();
// *Single responsibility principle* each class should only have a single job to do

let ryley = new Instructor({ name: 'Ryley' });
console.log(
    `${ryley.name} can teach: ${Instructor.canTeach(ryley)}`
);

let jordan = new Instructor({ name: 'Jordan', role: 'classroom' });
console.log(
    `${jordan.name} can teach: ${Instructor.canTeach(jordan)}`
);