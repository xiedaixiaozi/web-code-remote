<template>
    <div>
      <hr>
      这里是ComponentA
      <br>
      <button @click="sendMessageToComponentB">传递给ComponentB组件的值</button>
      &nbsp;
      <input type="text" v-model="messageToComponentB">
      <hr>
    </div>
</template>

<script>
import Bus from "../utils/EventBus.js";
export default {
  name: 'ComponentA',
  data() {
    return {
      messageToComponentB: "Hello ComponentB",
    }
  },
  methods: {
    sendMessageToComponentB() {
      Bus.$emit("sendMessageToComponentB", this.messageToComponentB);
    }
  }
}
</script>

<style>

</style>