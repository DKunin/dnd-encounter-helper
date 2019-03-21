const template = `
        <div>
            <button @click="generateName">Generate</button>
            <ul>
                <li v-for="singleLog in log">
                    {{ singleLog }}
                </li>
            </ul>
            
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
        log() {
            return this.$store.state.generatedLog;
        }
    },
    template,
    methods: {
        generateName() {
            this.name = chance.pickone(names);
            this.traits = [
                ...chance.pickset(traits.npcTraits, chance.integer({ min: 1, max: 2 })),
                chance.pickone(traits.mannerisms),
                chance.pickone(traits.traits)
            ].map(singleTrait => singleTrait.toLowerCase()).join('/');

            this.$store.commit('nameGenerated', `${this.name}: ${this.traits}`);
        }
    },
    mounted() {
    }
};

export default namesView;
