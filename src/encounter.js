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
            <a v-if="false" :href="generateFile()" download="encounter.json">
                Download as JSON
            </a>
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
    methods: {
        generateFile() {
            // var txtFile = "encounter.json";
            // var file = new File(txtFile);
            // var str = JSON.stringify(this.$store.state.encounter);
            // var dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(str);
            // return dataUri;
            return '';
        }
    },
    template
};

export default encounter;
