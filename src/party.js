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
                <div class="field">
                    <div class="field">
                      <label class="label">Name</label>
                        <div class="control">
                            <input v-model="name" class="input" type="text" placeholder="name">
                        </div>
                    </div>
                    
                    <div class="field">
                      <label class="label">Initiative</label>    
                        <div class="control">
                            <input v-model="initiative" class="input" type="text" placeholder="initiative">
                        </div>
                    </div>
                

                    <div class="field">
                      <label class="label">Armor Class</label>
                        <div class="control">
                            <input v-model="ac" class="input" type="text" placeholder="ac">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Hit points</label>
                        <div class="control">
                            <input v-model="hp" class="input" type="text" placeholder="hp">
                        </div>
                    </div>

                    <div class="field">
                      <label class="label">Misc</label>
                        <div class="control">
                            <input v-model="misc" class="input" type="text" placeholder="misc">
                        </div>
                    </div>
                    
                </div>
                
                <button class="button">add</button>
            </form>
        </main>
    `;

const party = {
    data() {
        return {
            id: null,
            name: null,
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
                initiative,
                ac,
                hp,
                misc
            } = this;

            this.$store.commit('addToParty', {
                name,
                id,
                initiative,
                ac,
                hp,
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
