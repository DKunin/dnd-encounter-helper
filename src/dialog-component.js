const template = `
        <div class="dialog-holder" v-if="opened">
            <dialog :open="opened" :class="className">
                <slot />
                <div v-if="!noCloseButton" @click="handleClose" class="close-button">⨯</div>
            </dialog>
            <div :hidden="!opened" class="dialog-bg" @click="onClose"></div>
        </div>
    `;

const DialogComponent = {
    props: {
        opened: Boolean,
        onClose: Function,
        noCloseButton: Boolean,
        className: String
    },
    template,
    methods: {
        handleClose() {
            this.onClose();
        }
    },
    mounted() {},
    beforeDestroy() {}
};

export default DialogComponent;
