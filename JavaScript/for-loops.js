var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

// Declare variable, Declare condition for looping, Declare Incrementor
for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
}

// Different syntax
for (var i = 0; i <= (players.length -1); i++) {
    console.log(players[i]);
}

// ------------------------------------------------------------------------
// Used for collections
// Dont need conditions or incrementor/will only loop as mamy times as there are items in the array
for (player in players) {
    console.log(player); //Represents the index
    console.log(players[player]);
}

// -----------------------------------------------------------------------
// Used for passing functions into the loop/collection
players.forEach(function(element) {
    console.log(element);
});