const template = `
        <main class="section">
            <article class="media" v-for="monster in encounter">
              <figure class="media-left">
                <p class="image is-64x64">
                  {{ monster.challenge_rating }}
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                    <p>
                    <strong>{{ monster.name }} </strong> <small>{{ monster.size }}</small> <small>{{ monster.type }}</small>
                    </p>
                </div>
              </div>
            </article>
        </main>
    `;

const encounter = {
    computed: {
        encounter() {
            return this.$store.state.encounter;
        }
    },
    mounted() {
        console.log(this.$store.state.encounter);
    },
    template
};

export default encounter;
