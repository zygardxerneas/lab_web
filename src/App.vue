<template>
  <div id="app">
    <my_header></my_header>
<!--    <el-container>-->
<!--      <el-header style="padding: 0;min-height:10%">-->
<!--       -->
<!--      </el-header>-->
<!--      <el-main>Main</el-main>-->
<!--      <el-footer>Footer</el-footer>-->
<!--    </el-container>-->
    <home></home>
  </div>

</template>

<script>
import home from './components/home'
import my_header from "@/components/my_header";

export default {
  name: 'app',
  components: {
    home,
    my_header
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
