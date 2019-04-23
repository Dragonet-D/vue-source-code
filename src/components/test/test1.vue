<template>
  <div>
    <input
      type="text"
      :value="msg"
      @input="updateValue"
      placeholder="edit me"
    >
    <div>
      <slot name="nameSlot"></slot>
    </div>
    <slot></slot>
    <slot text="Hello" :msg="message"></slot>
  </div>
</template>

<script>
  export default {
    name: "test1",
    data() {
      return {
        message: "World!"
      }
    },
    model: {
      prop: "msg",
      event: "change"
    },
    props: ["msg"],
    methods: {
      updateValue(e) {
        this.$emit("change", e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
