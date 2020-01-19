class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

const choice1 = new Home({type: 'house', payment: 'mortgage'});
console.log(Home.homeImprovement(choice1));

const choice2 = new Home({type: 'apartment', payment: 'renting'});
console.log(Home.homeImprovement(choice2));