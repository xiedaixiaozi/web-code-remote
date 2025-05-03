<template>
    <div>
      <!-- 父传子-5：渲染 -->
      这里是ComponentLocal，这是App组件的值：{{ messageToComponentLocal }}
      <br>
      <button @click="sendMessageToApp">传递给App组件的值</button>
      &nbsp;
      <input type="text" v-model="messageToApp">
      <hr>
    </div>
</template>

<script>
export default {
  name: 'ComponentLocal',
  // 父传子-4：获取接收的属性
  props: ["messageToComponentLocal"],
  data() {
    return {
      // 子传父-1：设置传递的属性
      messageToApp: "ComponentLocal",
    }
  },
  methods: {
    // 子传父-2：设置触发传递的事件
    sendMessageToApp() {
      this.$emit("receiveMessageFromComponentLocal", this.messageToApp);
    }
  }
}
</script>

<style>

</style>