<template>
  <div id="app">
    <my_header></my_header>
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">HOME</el-menu-item>
      <el-menu-item index="2" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">PBULICATIONS</el-menu-item>
      <el-menu-item index="3" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">PROJECTS</el-menu-item>
      <el-menu-item index="4" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">PEOPLE</el-menu-item>
      <el-menu-item index="5" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">NEWS</el-menu-item>
      <el-menu-item index="6" style="color: rgba(229, 28, 35, 1)" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">CONTACT</el-menu-item>
    </el-menu>
<!--    <el-container>-->
<!--      <el-header style="padding: 0;min-height:10%">-->
<!--       -->
<!--      </el-header>-->
<!--      <el-main>Main</el-main>-->
<!--      <el-footer>Footer</el-footer>-->
<!--    </el-container>-->
    <home v-if="activeIndex==1"></home>
    <my_footer></my_footer>
  </div>

</template>

<script>
import home from './components/home'
import my_header from "@/components/my_header";
import my_footer from "@/components/my_footer";

export default {
  name: 'app',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isMobile: false,
    }
  },
  components: {
    home,
    my_header,
    my_footer
  },
  methods: {
    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
      this.activeIndex = key;
    }
  },
  mounted() {
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if(w < 1000){
      this.isMobile = true;
    }

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
  .el-menu{
    padding-left: 10%;
    padding-right: 10%;
    /*font-size: 24px;*/
    display: flex;
    justify-content: center;
    .el-submenu__title{
      font-size: 0.2rem;
    }
    .el-menu-item{
      font-size: 0.2rem;
    }
  }
}
</style>
