Component({
    export() {},
    mixins: [],
    data: {
        isShow: true,
    },
    props: {
        onInput() {},
        formInfo: {
            type: Object,
            value: {},
        },
    },

    didMount() {
        console.log(this.$id);
    },
    didUpdate() {},
    didUnmount() {},
    methods: {
        inputConfirm(e) {
            console.log(e.detail.value);
        },
        input(e) {
            console.log(e.detail.value);
            this.props.onInput(this.props.formInfo.name, e.detail.value);
        },
    },
});
