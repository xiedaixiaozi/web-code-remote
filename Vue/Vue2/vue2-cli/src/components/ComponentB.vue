<template>
    <div>
      这里是ComponentB，这是ComponentA组件的值：{{ receiveMessageFromComponentA }}
      <hr>
    </div>
</template>

<script>
import Bus from "../utils/EventBus.js";
export default {
  name: 'ComponentB',
  data() {
    return {
      receiveMessageFromComponentA: "",
    }
  },
  created() {
    Bus.$on("sendMessageToComponentB", (messageFromComponentA) => {
      this.receiveMessageFromComponentA = messageFromComponentA;
    });
  },
  beforeDestroy() {
    Bus.$off('sendMessageToComponentB');
  }
}
</script>

<style>

</style>