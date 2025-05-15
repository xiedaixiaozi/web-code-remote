<template>
  <div id="app">
    这里是App
    <!-- 访问Vuex的数据-方式一 -->
    <!-- <h1>Count:{{ $store.state.count }}</h1> -->
    <h1>Count:{{ count }}</h1>
    <button @click="add()">Click To +1</button>
    <br>
    <button @click="subCount(1)">Click To -1</button>
    <br>
    <button @click="change(666)">Change 1s After Clicking</button>
    <br>
    <button @click="subAsyncCount(555)">Substraction 2s After Clicking</button>
    <br>
    <!-- {{ $store.getters.filterList }} -->
    {{ filterList }}
    <hr>
    {{ name }} &nbsp; {{ age }} <br> {{ getter }}
    <br>
    <button @click="usermut()">user mutations</button>
    <br>
    <button @click="useract()">user actions</button>
  </div>
</template>

<script>
import store from './store';
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      // 访问Vuex的数据-方式二
      // count: this.$store.state.count,
    }
  },
  // 访问Vuex的数据-方式三
  mounted() {
    console.log(store.state.count);
  },
  computed: {
    // 访问Vuex的数据-方式四
    // count() {
    //   return this.$store.state.count;
    // }
    // 访问Vuex的数据-方式五
    ...mapState(["count"]),
    ...mapGetters(["filterList"]),
    ...mapState("user", ["name"]),
    ...mapState("user", ["age"]),
    ...mapGetters("user", ["getter"])
  },
  methods: {
    add() {
      this.$store.commit("addCount", { count: 1 });
    },
    ...mapMutations(["subCount"]),
    change(num) {
      this.$store.dispatch("setAsyncCount", num);
    },
    ...mapActions(["subAsyncCount"]),
    usermut() {
      this.$store.commit("user/output");
    },
    useract() {
      this.$store.dispatch("user/asyncOutput");
    }
  }
}
</script>

<style>

</style>