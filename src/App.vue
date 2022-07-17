<template>
  <button @click="handleClick"> click here </button>
  <div class="big-box" :style="{ backgroundColor: visibility ? 'red' : 'transparent' }"></div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import useCommonStore from './store/common';

export default {
  name: 'App',

  data() {
    return {
      counter: 0
    }
  },
  computed: {
    ...mapState(useCommonStore, ["visibility"]),
  },

  methods: {
    ...mapActions(useCommonStore, ["setVisibility"]),

    /**
     * @returns {void}
     */
    handleClick() {
      this.counter++;
      this.setVisibility(!this.visibility)
    },
  },
}
</script>

<style scoped>
.big-box {
  width: 300px;
  height: 300px;
  background-color: white;
  margin-top: 30px;
}
</style>
