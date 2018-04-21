const template = `
        <main class="section">
            <h2 class="is-size-5">Party</h2>
            <ul>
                <li v-for="member in party">
                    <a @click="editMember(member)">{{ member.name }}</a> 
                    <a @click="removeMember(member.partyMemberId)">remove</a>
                </li>
            </ul>

            <form @submit="addToParty">
                <input v-model="partyMemberId" type="hidden" placeholder="id">
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
                
                <button type="submit" class="button">add</button>
                <button type="button" @click="newPartyMember" class="button">new</button>
            </form>
        </main>
    `;

const party = {
    data() {
        return {
            partyMemberId: null,
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
            const { name, partyMemberId, initiative, ac, hp, misc } = this;

            this.$store.commit('addToParty', {
                name,
                partyMemberId,
                initiative,
                ac,
                hp,
                misc
            });
        },
        removeMember(partyMemberId) {
            this.$store.commit('removeFromParty', partyMemberId);
        },
        newPartyMember() {
            ['name', 'partyMemberId', 'initiative', 'ac', 'hp', 'misc'].forEach(
                singleKey => {
                    this[singleKey] = null;
                }
            );
        },
        editMember(partyMember) {
            Object.keys(partyMember).forEach(singleKey => {
                this[singleKey] = partyMember[singleKey];
            });
        }
    }
};

export default party;
