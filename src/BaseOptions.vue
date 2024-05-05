<script>
export default {
  methods: {
    onChangeLocale(locale) {
      this.$vuetify.locale.current = locale
    }
  }
}
</script>
