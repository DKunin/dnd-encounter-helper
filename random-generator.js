'use strict';

const fs = require('fs');
const monsters = require('./data/monsters-n.js');
const meow = require('meow');
const uniqueRandomArray = require('unique-random-array');

// console.log(random(), random(), random(), random());

const cli = meow(
    ``,
    {
        alias: {
            c: 'challange'
        }
    }
);

const classes = Object.keys(monsters.reduce((newArray, singleItem) => {
	newArray[singleItem.type] = 1;
	return newArray;
}, {})).filter(Boolean);

const monstersChallenge = uniqueRandomArray(monsters.filter(singleMonster => {
	return singleMonster['challenge_rating'] < cli.flags.c;
}));s

console.log(monstersChallenge());
console.log(monstersChallenge());
console.log(monstersChallenge());
console.log(monstersChallenge());

// if (!cli.input.length) {
//     cli.showHelp(-1);
// }


// console.log(monsters);

