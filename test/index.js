const testString =
	"0ed(-1): light, sacred flame, thaumaturgy|1st(4): bless, cure wounds, sanctuary, Command, Sleep|2nd(3): Hold Person, Silence, Suggestion|3d(3): Crusader's Mantle|4th(2): Grasping Vine|7th(1): Divine Word";

function stringToSpellObject(string) {
	return string
		.split('|')
		.filter(Boolean)
		.map(singleLine => {
			const level = singleLine.match(/\d(st|nd|d|th|ed)/g)[0];
			const slots = singleLine
				.match(/\(-?\d\)/g)[0]
				.replace(/\(/g, '')
				.replace(/\)/g, '');
			const spells = singleLine
				.replace(/\d(st|nd|d|th|ed)\(-?\d\):\s?/g, '')
				.toLowerCase()
				.split(',')
				.map(singleSpellLine => {
					return singleSpellLine.trim();
				});
			return {
				level,
				slots,
				spells
			};
		});
}

console.log(stringToSpellObject(testString));
