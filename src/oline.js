const template = `
        <div v-if="$slots">
            <slot></slot>
        </div>
    `;

const oline = {
    props: {
        originalObject: {
            type: Object,
            default: {}
        },
        objectKey: {
            type: String,
            default: ''
        }
    },
    template,
    mounted() {
        console.log(this.$slots);
    }
};

export default oline;
