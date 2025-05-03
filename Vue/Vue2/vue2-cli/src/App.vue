<template>
  <div>
    <!-- 父传子-3：设置接收的属性和传递的属性 -->
    <!-- 子传父-3：监听触发传递的事件 -->
    <!-- <ComponentLocal :messageToComponentLocal="messageToComponentLocal" @receiveMessageFromComponentLocal="receive"></ComponentLocal> -->
    <!-- 子传父-5：渲染 -->
    <!-- 这里是App，这是ComponentLocal组件的值：{{ messageFromComponentLocal }} -->
    <!-- EventBus -->
    <!-- <ComponentA></ComponentA> -->
    <!-- <ComponentB></ComponentB> -->
    <!-- v-model（父子组件双向绑定） -->
    这里是App，目前选择的城市为：{{ selectedCity }}
    <ComponentC v-model="selectedCity"></ComponentC>
    <!-- .sync（父子双向绑定） -->
    这里是App，目前输入为：{{ inputText }}
    <ComponentD :inputText.sync="inputText"></ComponentD>
    <!-- 获取DOM元素 -->
    <div ref="box"></div>
    <!-- 获取组件 -->
    <ComponentWhole ref="component"></ComponentWhole>
  </div>
</template>

<script>
// 父传子-1：导入子组件
// import ComponentLocal from "./components/ComponentLocal.vue";
// import ComponentA from "./components/ComponentA.vue";
// import ComponentB from "./components/ComponentB.vue";
import ComponentC from "./components/ComponentC.vue";
import ComponentD from "./components/ComponentD.vue";
export default {
  name: 'App',
  // 父传子-2：注册子组件
  components: {
    // ComponentLocal,
    // ComponentA,
    // ComponentB,
    ComponentC,
    ComponentD
  },
  data() {
    return {
      messageToComponentLocal: "Hello ComponentLocal",
      messageFromComponentLocal: "",
      selectedCity: "北京",
      inputText: "Hello ComponentD"
    }
  },
  methods: {
    // 子传父-4：接收传递的属性
    receive(messageToApp) {
      this.messageFromComponentLocal = messageToApp;
    }
  },
  mounted() {
    console.log(this.$refs.box);
    console.log(this.$refs.component);
  }
}
</script>

<style>

</style>