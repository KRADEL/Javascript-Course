var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

// Condition checked while looping
var i = 0;
while (i < players.length) {
    console.log(players[i]);
    i++;
}


// Condition checked after the iteration
var i = 0;
do {
    console.log(players[i]);
    i++;
} while (i < players.length)

// Used for gaming, garuntees the process runs at least once