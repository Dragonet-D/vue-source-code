<template>
  <div>vuex test</div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "vuexTest",
    mounted() {
      // console.log(this.$store.state);
    },
    computed: {
      ...mapState(['count'])
    }
  }
</script>

<style scoped>

</style>
