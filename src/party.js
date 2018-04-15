const template = `
        <main class="section">
            <h2 class="is-size-5">Party</h2>
            <ul>
                <li v-for="member in party">
                    <a @click="editMember(member)">{{ member.name }}</a> 
                    <a @click="removeMember(member.id)">remove</a>
                </li>
            </ul>
            <form @submit="addToParty">
                <input v-model="id" type="hidden" placeholder="id">
                <input v-model="name" class="input" type="text" placeholder="name">
                <input v-model="race" class="input" type="text" placeholder="race">
                <input v-model="classType" class="input" type="text" placeholder="classType">
                <input v-model="initiative" class="input" type="text" placeholder="initiative">
                <input v-model="ac" class="input" type="text" placeholder="ac">
                <input v-model="hp" class="input" type="text" placeholder="hp">
                <input v-model="alignment" class="input" type="text" placeholder="alignment">
                <input v-model="misc" class="input" type="text" placeholder="misc">
                <button class="button">add</button>
            </form>
        </main>
    `;

const party = {
    data() {
        return {
            id: null,
            name: null,
            race: null,
            classType: null,
            initiative: null,
            ac: null,
            hp: null,
            alignment: null,
            misc: null
        };
    },
    computed: {
        party() {
            return this.$store.state.party;
        }
    },
    template,
    methods: {
        addToParty(event) {
            event.preventDefault();
            const {
                name,
                id,
                race,
                classType,
                initiative,
                ac,
                hp,
                alignment,
                misc
            } = this;

            this.$store.commit('addToParty', {
                name,
                id,
                race,
                classType,
                initiative,
                ac,
                hp,
                alignment,
                misc
            });
        },
        removeMember(id) {
            this.$store.commit('removeFromParty', id);
        },
        editMember(partyMember) {
            Object.keys(partyMember).forEach((singleKey) => {
                this[singleKey] = partyMember[singleKey];
            })

        }
    }
};

export default party;
