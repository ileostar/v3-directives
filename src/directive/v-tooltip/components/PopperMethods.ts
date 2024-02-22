// @vue/component
export default {
  methods: {
    dispose(...args) {
      return this.$refs.popper.dispose(...args)
    },
    hide(...args) {
      return this.$refs.popper.hide(...args)
    },
    onResize(...args) {
      return this.$refs.popper.onResize(...args)
    },
    show(...args) {
      return this.$refs.popper.show(...args)
    },
  },
}
