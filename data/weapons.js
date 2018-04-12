const weapons = [
    {
        name: 'Barbed Dagger',
        cost: '10 gp',
        damage: '2d4',
        damagetype: 'Piercing',
        weight: '1 lb',
        homebrew: 'True',
        properties: ['Light', 'Finesse', 'Thrown (20/60)']
    },
    {
        name: 'Brandistock',
        cost: '10 gp',
        damage: '1d8',
        damagetype: 'Piercing',
        weight: '4 lb',
        homebrew: 'True',
        properties: ['Special', 'Two-handed']
    },
    {
        name: 'Broken Sword',
        cost: '5 sp',
        damage: '1d4',
        damagetype: 'Piercing',
        weight: '1 lb',
        homebrew: 'True',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Cestus',
        cost: '5 sp',
        damage: '1d4',
        damagetype: 'Bludgeoning',
        weight: '0.5 lb',
        homebrew: 'True',
        properties: ['Light', 'Special']
    },
    {
        name: 'Club',
        cost: '1 sp',
        damage: '1d4',
        damagetype: 'Bludgeoning',
        weight: '2 lb',
        homebrew: 'False',
        properties: ['Light']
    },
    {
        name: 'Dagger',
        cost: '2 gp',
        damage: '1d4',
        damagetype: 'Piercing',
        weight: '1 lb',
        homebrew: 'False',
        properties: ['Light', 'Finesse', 'Thrown (20/60)']
    },
    {
        name: 'Double Spear',
        cost: '5 gp',
        damage: '1d6',
        damagetype: 'Piercing',
        weight: '4 lb',
        homebrew: 'True',
        properties: ['Versatile (1d8)', 'Thrown (20/60)']
    },
    {
        name: 'Eye Sickle',
        cost: '10 gp',
        damage: '1d6',
        damagetype: 'Piercing',
        weight: '4 lb',
        homebrew: 'True',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Falx',
        cost: '8 gp',
        damage: '1d6',
        damagetype: 'Slashing',
        weight: '3 lb',
        homebrew: 'True',
        properties: ['Versatile (1d8)']
    },
    {
        name: 'Fauchard',
        cost: '10 gp',
        damage: '1d6',
        damagetype: 'Slashing',
        weight: '7 lb',
        homebrew: 'True',
        properties: ['Heavy', 'reach', 'Two-handed']
    },
    {
        name: 'Flamberge',
        cost: '15 gp',
        damage: '1d8 + 1d2',
        damagetype: 'Slashing + Ripping',
        weight: '6 lb',
        homebrew: 'True',
        properties: ['Ripping', 'Two-handed']
    },
    {
        name: 'Gavel',
        cost: '5 sp',
        damage: '1d4',
        damagetype: 'Bludgeoning',
        weight: '0.5 lb',
        homebrew: 'True',
        properties: ['Undersized']
    },
    {
        name: 'Greatclub',
        cost: '2 sp',
        damage: '1d8',
        damagetype: 'Bludgeoning',
        weight: '10 lb',
        homebrew: 'False',
        properties: ['Two-handed']
    },
    {
        name: 'Greatspear',
        cost: '25 gp',
        damage: '1d10',
        damagetype: 'Piercing',
        weight: '8 lb',
        homebrew: 'True',
        properties: ['Oversized', 'Thrown (20/60)', 'Two-handed']
    },
    {
        name: 'Handaxe',
        cost: '5 gp',
        damage: '1d6',
        damagetype: 'Slashing',
        weight: '2 lb',
        homebrew: 'False',
        properties: ['Light', 'Thrown (20/60)']
    },
    {
        name: 'Iron Claws',
        cost: '5 gp',
        damage: '1d4',
        damagetype: 'Piercing',
        weight: '2 lb',
        homebrew: 'True',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Javelin',
        cost: '5 sp',
        damage: '1d6',
        damagetype: 'Piercing',
        weight: '2 lb',
        homebrew: 'False',
        properties: ['Thrown (30/120)']
    },
    {
        name: 'Karambit',
        cost: '4 gp',
        damage: '1d4',
        damagetype: 'Slashing',
        weight: '1 lb',
        homebrew: 'True',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Katar',
        cost: '5 gp',
        damage: '1d4',
        damagetype: 'Piercing',
        weight: '1 lb',
        homebrew: 'True',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Knife',
        cost: '2 sp',
        damage: '1d3',
        damagetype: 'Slashing',
        weight: '0.25 lb',
        homebrew: 'True',
        properties: ['Undersized', 'Finesse']
    },
    {
        name: 'Knuckleduster',
        cost: '3 sp',
        damage: 'Unarmed damage + 1',
        damagetype: '',
        weight: '2 lb',
        homebrew: 'True',
        properties: ['Light', 'Special']
    },
    {
        name: 'Ko',
        cost: '1 gp',
        damage: '1d4',
        damagetype: 'Piercing / bludgeoning',
        weight: '1 lb',
        homebrew: 'True',
        properties: ['Light', 'Finesse', 'Special']
    },
    {
        name: 'Kukri',
        cost: '6 gp',
        damage: '1d6',
        damagetype: 'Slashing',
        weight: '2 lb',
        homebrew: 'True',
        properties: ['Light', 'Thrown (20/60)']
    },
    {
        name: 'Light Hammer',
        cost: '2 gp',
        damage: '1d4',
        damagetype: 'Bludgeoning',
        weight: '2 lb',
        homebrew: 'False',
        properties: ['Light', 'Thrown (20/60)']
    },
    {
        name: 'Mace',
        cost: '5 gp',
        damage: '1d6',
        damagetype: 'Bludgeoning',
        weight: '2 lb',
        homebrew: 'False',
        properties: []
    },
    {
        name: 'Needle',
        cost: '2 sp',
        damage: '1d4',
        damagetype: 'Piercing',
        weight: '0.25 lb',
        homebrew: 'True',
        properties: ['Undersized', 'Finesse']
    },
    {
        name: 'Quarterstaff',
        cost: '2 sp',
        damage: '1d6',
        damagetype: 'Bludgeoning',
        weight: '4 lb',
        homebrew: 'False',
        properties: ['Versatile (1d8)']
    },
    {
        name: 'Sap',
        cost: '1 gp',
        damage: '1d4',
        damagetype: 'Bludgeoning',
        weight: '2 lb',
        homebrew: 'True',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Scythe',
        cost: '5 gp',
        damage: '2d4',
        damagetype: 'Slashing',
        weight: '5 lb',
        homebrew: 'True',
        properties: ['Heavy', 'Two-handed']
    },
    {
        name: 'Sickle',
        cost: '1 gp',
        damage: '1d4',
        damagetype: 'Slashing',
        weight: '2 lb',
        homebrew: 'False',
        properties: ['Light']
    },
    {
        name: 'Spade',
        cost: '2 gp',
        damage: '1d4',
        damagetype: 'Bludgeoning',
        weight: '4 lb',
        homebrew: 'True',
        properties: ['Versatile']
    },
    {
        name: 'Spear',
        cost: '1 gp',
        damage: '1d4',
        damagetype: 'Slashing',
        weight: '3 lb',
        homebrew: 'False',
        properties: ['Thrown (20/60)', 'Versatile (1d8)']
    },
    {
        name: 'Torch Mace',
        cost: '6 gp',
        damage: '1d4',
        damagetype: 'Bludgeoning',
        weight: '2 lb',
        homebrew: 'True',
        properties: ['Special']
    },
    {
        name: 'Torch Staff',
        cost: '12 gp',
        damage: '2d4',
        damagetype: 'Bludgeoning',
        weight: '7 lb',
        homebrew: 'True',
        properties: ['Heavy', 'Two-handed', 'Special']
    },
    {
        name: 'Zerka',
        cost: '10 sp',
        damage: '1d8',
        damagetype: 'Piercing',
        weight: '3 lb',
        homebrew: 'True',
        properties: ['Special', 'Finesse', 'Thrown (40/160)']
    },
    {
        name: 'Arming Sword',
        cost: '20 gp',
        damage: '1d6 piercing',
        weight: '3 lb',
        properties: ['Light', 'Finesse', 'Versatile (1d8)']
    },
    {
        name: 'Back Sword',
        cost: '10 gp',
        damage: '1d6 piercing',
        weight: '3 lb',
        properties: []
    },
    {
        name: 'Battleaxe',
        cost: '10 gp',
        damage: '1d8 slashing',
        weight: '4 lb',
        properties: ['Versatile (1d10)']
    },
    {
        name: 'Bec de Corbin',
        cost: '20 gp',
        damage: '2d4 piercing',
        weight: '6 lb',
        properties: ['Heavy', 'Reach', 'Two-Handed']
    },
    {
        name: 'Boar Spear',
        cost: '10 gp',
        damage: '2d6 piercing',
        weight: '5 lb',
        properties: ['Heavy', 'Two-Handed']
    },
    {
        name: 'Broadsword',
        cost: '20 gp',
        damage: '2d4 piercing',
        weight: '3 lb',
        properties: []
    },
    {
        name: 'Buster Sword',
        cost: '250 gp',
        damage: '2d8 slashing',
        weight: '12 lb',
        properties: ['Oversized', 'Two-Handed']
    },
    {
        name: 'Chaind, Bladed',
        cost: '8 gp',
        damage: '1d6 slashing',
        weight: '10 lb',
        properties: ['Heavy', 'Finesse', 'Reach', 'Special', 'Two-Handed']
    },
    {
        name: 'Chaind, Spiked',
        cost: '8 gp',
        damage: '1d6 piercing',
        weight: '10 lb',
        properties: ['Heavy', 'Finesse', 'Reach', 'Special', 'Two-Handed']
    },
    {
        name: 'Chaind, weighted',
        cost: '8 gp',
        damage: '1d6 bludgeoning',
        weight: '10 lb',
        properties: ['Heavy', 'Finesse', 'Reach', 'Special', 'Two-Handed']
    },
    {
        name: 'Cutlass',
        cost: '10 gp',
        damage: '1d8 slashing',
        weight: '2 lb',
        properties: ['Light']
    },
    {
        name: 'Double Axe',
        cost: '30 gp',
        damage: '1d8 slashing',
        weight: '10 lb',
        properties: ['Heavy', 'Two-Handed', 'Double Weapon']
    },
    {
        name: 'Double Flail',
        cost: '20 gp',
        damage: '1d8 bludgeoning',
        weight: '4 lb',
        properties: ['Two-Handed']
    },
    {
        name: 'Double Sword',
        cost: '20 gp',
        damage: '1d6 slashing',
        weight: '5 lb',
        properties: ['Double Weapon', 'Two-Handed']
    },
    {
        name: 'Dueling Shield',
        cost: '15 gp',
        damage: '1d8 bludgeoning',
        weight: '10 lb',
        properties: ['Heavy', 'Special', 'Two-Handed']
    },
    {
        name: 'Dwarven Ugrosh',
        cost: '50 gp',
        damage: '1d10 slashing',
        weight: '9 lb',
        properties: ['Heavy', 'Two-Handed']
    },
    {
        name: 'Elven Lightblade',
        cost: '50 gp',
        damage: '1d6 piercing',
        weight: '1 lb',
        properties: ['Finesse', 'Light', 'Special']
    },
    {
        name: 'Elven Thinblade',
        cost: '100 gp',
        damage: '1d8 piercing',
        weight: '1 lb',
        properties: ['Finesse', 'Special']
    },
    {
        name: 'Epee',
        cost: '50 gp',
        damage: '1d2 piercing',
        weight: '1 lb',
        properties: ['Special', 'Finesse']
    },
    {
        name: 'Estoc',
        cost: '25 gp',
        damage: '1d8 piercing',
        weight: '3 lb',
        properties: ['Versatile (1d10)']
    },
    {
        name: 'Faeblades',
        cost: '50 gp',
        damage: '2d4 slashing',
        weight: '2.5 lb',
        properties: ['Light', 'Finesse', 'Special']
    },
    {
        name: 'Falchion',
        cost: '10 gp',
        damage: '1d8 slashing',
        weight: '3 lb',
        properties: []
    },
    {
        name: 'Flail',
        cost: '10 gp',
        damage: '1d8 bludgeoning',
        weight: '2 lb',
        properties: []
    },
    {
        name: 'Glaive',
        cost: '20 gp',
        damage: '1d10 slashing',
        weight: '6 lb',
        properties: ['Heavy', 'Reach', 'Two-Handed']
    },
    {
        name: 'Greataxe',
        cost: '30 gp',
        damage: '1d12 slashing',
        weight: '7 lb',
        properties: ['Heavy', 'Two-Handed']
    },
    {
        name: 'Great Maul',
        cost: '150 gp',
        damage: '3d6 bludgeoning',
        weight: '145 lb',
        properties: ['Oversized', 'Two-Handed', 'Special']
    },
    {
        name: 'Greatsword',
        cost: '50 gp',
        damage: '2d6 slashing',
        weight: '6 lb',
        properties: ['Heavy', 'Two-Handed']
    },
    {
        name: 'Guisarme',
        cost: '15 gp',
        damage: '2d4 slashing',
        weight: '6 lb',
        properties: ['Heavy', 'Reach', 'Two-Handed']
    },
    {
        name: 'Gythka',
        cost: '20 gp',
        damage: '1d8 slashing',
        weight: '9 lb',
        properties: ['Heavy', 'Two-Handed']
    },
    {
        name: 'Halberd',
        cost: '20 gp',
        damage: '1d10 slashing',
        weight: '6 lb',
        properties: ['Heavy', 'Reach', 'Two-Handed']
    },
    {
        name: 'Heavy Flail',
        cost: '20 gp',
        damage: '1d12 bludgeoning',
        weight: '7 lb',
        properties: ['Heavy', 'Two-Handed']
    },
    {
        name: 'Hidden Blade',
        cost: '100 gp',
        damage: '1d4 piercing',
        weight: '0.5 lb',
        properties: ['Light', 'Finesse', 'Special']
    },
    {
        name: 'Katana',
        cost: '50 gp',
        damage: '1d8 slashing',
        weight: '3 lb',
        properties: ['Versatile (1d10)']
    },
    {
        name: 'Lajav',
        cost: '30 gp',
        damage: '1d8 bludgeoning',
        weight: '5 lb',
        properties: ['Finesse', 'Heavy', 'Two-Handed', 'Special']
    },
    {
        name: 'Lance',
        cost: '10 gp',
        damage: '1d12 piercing',
        weight: '6 lb',
        properties: ['Reach', 'Special']
    },
    {
        name: 'Longspear',
        cost: '3 gp',
        damage: '1d6 piercing',
        weight: '4 lb',
        properties: ['Heavy', 'Reach', 'Versatile (1d8)']
    },
    {
        name: 'Longstaff',
        cost: '5 sp',
        damage: '1d8 bludgeoning',
        weight: '7 lb',
        properties: ['Heavy', 'Reach', 'Special', 'Two-Handed']
    },
    {
        name: 'Longsword',
        cost: '15 gp',
        damage: '1d8 slashing',
        weight: '3 lb',
        properties: ['Versatile (1d10)']
    },
    {
        name: 'Main Gauche',
        cost: '5 gp',
        damage: '1d4 piercing',
        weight: '1 lb',
        properties: ['Finesse', 'Light', 'Special', 'Thrown (20/60)']
    },
    {
        name: 'Man Catcher',
        cost: '25 gp',
        damage: '1d4 bludgeoning',
        weight: '2 lb',
        properties: ['Reach', 'Two-Handed', 'Special']
    },
    {
        name: 'Maul',
        cost: '10 gp',
        damage: '2d6 bludgeoning',
        weight: '10 lb',
        properties: ['Heavy', 'Two-Handed']
    },
    {
        name: 'Meteor Hammer',
        cost: '30 gp',
        damage: '1d6 bludgeoning',
        weight: '5 lb',
        properties: ['Special', 'Two-Handed']
    },
    {
        name: "Monk's Spade",
        cost: '10 gp',
        damage: '1d6 slashing',
        weight: '4 lb',
        properties: ['Reach', 'Versatile (1d8)']
    },
    {
        name: 'Morningstar',
        cost: '15 gp',
        damage: '1d8 piercing',
        weight: '4 lb',
        properties: []
    },
    {
        name: 'Parrying Dagger',
        cost: '5 gp',
        damage: '1d4 piercing',
        weight: '2 lb',
        properties: ['Light', 'Special']
    },
    {
        name: 'Pike',
        cost: '5 gp',
        damage: '1d10 piercing',
        weight: '18 lb',
        properties: ['Heavy', 'Reach', 'Two-Handed']
    },
    {
        name: 'Rapier',
        cost: '25 gp',
        damage: '1d8 piercing',
        weight: '2 lb',
        properties: ['Finesse']
    },
    {
        name: 'Pollaxe',
        cost: '20 gp',
        damage: '2d4 bludgeoning',
        weight: '6 lb',
        properties: ['Heavy', 'Reach', 'Two-Handed']
    },
    {
        name: 'Saber',
        cost: '35 gp',
        damage: '1d8 slashing',
        weight: '3 lb',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Scimitar',
        cost: '25 gp',
        damage: '1d6 slashing',
        weight: '3 lb',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Shortsword',
        cost: '10 gp',
        damage: '1d6 piercing',
        weight: '2 lb',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Side Sword',
        cost: '25 gp',
        damage: '1d6 piercing',
        weight: '2.5 lb',
        properties: ['Light', 'Special']
    },
    {
        name: 'Small Sword',
        cost: '10 gp',
        damage: '1d6 piercing',
        weight: '1.5 lb',
        properties: ['Light', 'Finesse']
    },
    {
        name: 'Sword Breaker',
        cost: '15 gp',
        damage: '1d4 slashing',
        weight: '2 lb',
        properties: ['Light', 'Special']
    },
    {
        name: 'Talwar',
        cost: '30 gp',
        damage: '1d8 slashing',
        weight: '3 lb',
        properties: ['Finesse']
    },
    {
        name: 'Trident',
        cost: '5 gp',
        damage: '1d6 piercing',
        weight: '4 lb',
        properties: ['Thrown (20/60)', 'Versatile (1d8)']
    },
    {
        name: 'Two-Handed Morningstar',
        cost: '25 gp',
        damage: '1d12 piercing',
        weight: '10 lb',
        properties: ['Heavy', 'Two-Handed']
    },
    {
        name: 'War Pick',
        cost: '5 gp',
        damage: '1d8 piercing',
        weight: '2 lb',
        properties: []
    },
    {
        name: 'War Hammer',
        cost: '15 gp',
        damage: '1d8 bludgeoning',
        weight: '2 lb',
        properties: ['Versatile (1d10)']
    },
    {
        name: 'Warcleaver',
        cost: '25 gp',
        damage: '1d8 slashing/bludgeoning',
        weight: '5 lb',
        properties: []
    },
    {
        name: 'Whip',
        cost: '2 gp',
        damage: '1d4 slashing',
        weight: '3 lb',
        properties: ['Reach', 'Finesse']
    },
    {
        name: 'Zweihänder',
        cost: '100 gp',
        damage: '2d8 slashing',
        weight: '9 lb',
        properties: ['Heavy', 'Reach', 'Special', 'Two-Handed']
    },

    {
        name: 'Atlatl',
        cost: '5 gp',
        damage: '1d6 piercing',
        weight: '1 lb',
        properties: ['Ammunition', 'Range (50-100)', 'Special']
    },
    {
        name: 'Blowgun',
        cost: '10 gp',
        damage: '1 piercing',
        weight: '1 lb',
        properties: ['Ammunition', 'Range (25/100)', 'Loading']
    },
    {
        name: 'Bolas',
        cost: '1 gp',
        damage: '1d4 bludgeoning',
        weight: '2 lb',
        properties: ['Special', 'Thrown (20/60)']
    },
    {
        name: 'Boomerang',
        cost: '2 gp',
        damage: '1d4 bludgeoning',
        weight: '1 lb',
        properties: ['Special', 'Thrown (20/60)']
    },
    {
        name: 'Chakram',
        cost: '5 gp',
        damage: '1d6 slashing',
        weight: '0.5 lb',
        properties: ['Finesse', 'Thrown (20/60)']
    },
    {
        name: 'Chatkcha',
        cost: '1 gp',
        damage: '1d6 slashing',
        weight: '2 lb',
        properties: ['Finesse', 'Light', 'Thrown (30/120)', 'Special']
    },
    {
        name: 'Crossbow, Hand',
        cost: '75 gp',
        damage: '1d6 piercing',
        weight: '3 lb',
        properties: ['Ammunition', 'Range (30/120)', 'Light', 'Loading']
    },
    {
        name: 'Crossbow, Heavy',
        cost: '50 gp',
        damage: '1d10 piercing',
        weight: '18 lb',
        properties: [
            'Ammunition',
            'Range (100/400)',
            'Heavy',
            'Loading',
            'Two-Handed'
        ]
    },
    {
        name: 'Crossbow, Repeating',
        cost: '250 gp',
        damage: '2d4 piercing',
        weight: '18 lb',
        properties: ['Ammunition', 'Range (80/320)', 'Heavy', 'Two-Handed']
    },
    {
        name: 'Longbow',
        cost: '50 gp',
        damage: '1d8 piercing',
        weight: '2 lb',
        properties: ['Ammunition', 'Range (150/600)', 'Heavy', 'Two-Handed']
    },
    {
        name: 'Net',
        cost: '1 gp',
        damage: '',
        weight: '3 lb',
        properties: ['Special', 'Range (5/15)', 'Thrown']
    },
    {
        name: 'Throwing Hammer',
        cost: '15 gp',
        damage: '1d6 bludgeoning',
        weight: '4 lb',
        properties: ['Thrown (60/120)']
    },
    {
        name: 'Crossbow, light',
        cost: '25 gp',
        damage: '1d8 piercing',
        weight: '5 lb',
        properties: ['Ammunition (80/320)', 'Loading', 'Two-Handed']
    },
    {
        name: 'Dart',
        cost: '5 cp',
        damage: '1d4 piercing',
        weight: '0.25 lb',
        properties: ['Finesse', 'Thrown (20/60)']
    },
    {
        name: 'Shortbow',
        cost: '25 gp',
        damage: '1d6 piercing',
        weight: '2 lb',
        properties: ['Ammunition (80/320)', 'Two-handed']
    },
    {
        name: 'Sling',
        cost: '1 sp',
        damage: '1d4 bludgeoning',
        weight: '',
        properties: ['Ammunition (30/120)']
    },
    {
        name: 'Slingstaff',
        cost: '2 sp',
        damage: '1d6 bludgeoning',
        weight: '2 lb',
        properties: ['Ammunition (30/120)', 'Two-handed']
    }
];

export default weapons;
