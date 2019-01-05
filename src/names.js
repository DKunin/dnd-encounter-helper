const template = `
        <div>
            {{ name }}  
            <button @click="generateName">Generate</button>
        </div>
    `;

import names from '../data/names.js';

const namesView = {
    data() {
        return {
            name: ''
        };
    },
    computed: {
    },
    template,
    methods: {
        generateName() {
            this.name = chance.pickone(names);
        }
    },
    mounted() {
    }
};

export default namesView;
