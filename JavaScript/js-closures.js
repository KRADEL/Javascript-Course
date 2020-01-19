function battingAverage() {
    var hits = 100;
    var atBats = 300;

    return { //Method
        getCurrentAverage: function() {
            return (hits/atBats);
        },
        updateHitsAndAtBats: function(hit, atBat) {
            hits += hit;
            atBats += atBat;
        }
    }
}

var altuve = battingAverage(); //Re-assign to a variable so it is returned as an entire object

//Returned as an object, you can traverse through . syntax
console.log(altuve.getCurrentAverage());

altuve.updateHitsAndAtBats(2, 20);
console.log(altuve.getCurrentAverage());