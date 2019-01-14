const template = `
        <div>
            {{ name }}: {{ traits }}
            <button @click="generateName">Generate</button>
        </div>
    `;

import names from '../data/names.js';
import traits from '../data/traits.js';

const namesView = {
    data() {
        return {
            name: '',
            traits: ''
        };
    },
    computed: {
    },
    template,
    methods: {
        generateName() {
            this.name = chance.pickone(names);
            this.traits = chance.pickset(traits.npcTraits, chance.integer({ min: 2, max: 4 })).join('/');
        }
    },
    mounted() {
    }
};

export default namesView;
