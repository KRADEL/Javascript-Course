class Instructor {
    constructor({ name, role = 'assistant' }) {
        this.name = name;
        this.role = role;
    }

    renderDetails() {
        console.log(`${this.name}: ${this.role}`);
    }
}

const ryley = new Instructor({ name: 'Ryley Arnold' });
const jordan = new Instructor({ name: 'Jordan Arnold', role: 'grandmaster' });
ryley.renderDetails();
jordan.renderDetails();


class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

const model3 = new Car({year: 2020, brand: 'Tesla', poweredBy: 'electricity'});
model3.carSpecs();