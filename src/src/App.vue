<template>
  <div id="app">
    <my_header></my_header>
    <vueToTop type=6 duration=5 color="#79B4DE" size=36 right=50 bottom=50></vueToTop>
    <el-menu router :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/home" :style="isMobile?'padding: 0 0.1rem; fontsize: 4rem': 'font-size: 0.4rem'">HOME</el-menu-item>
      <el-menu-item index="/publication" :style="isMobile?'padding: 0 0.1rem ': 'font-size: 0.4rem'">PUBLICATIONS</el-menu-item>
      <el-menu-item index="/projects" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">PROJECTS</el-menu-item>
      <el-menu-item index="/people" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">PEOPLE</el-menu-item>
      <el-menu-item index="/news" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">NEWS</el-menu-item>
      <el-menu-item index="/contact" style="color: rgba(229, 28, 35, 1)" :style="isMobile?'padding: 0 0.1rem': 'font-size: 0.4rem'">CONTACT</el-menu-item>
    </el-menu>
<!--    <el-container>-->
<!--      <el-header style="padding: 0;min-height:10%">-->
<!--       -->
<!--      </el-header>-->
<!--      <el-main>Main</el-main>-->
<!--      <el-footer>Footer</el-footer>-->
<!--    </el-container>-->
    <news v-if="activeIndex == '/news'" :is-mobile="isMobile"></news>
    <publication v-else-if="activeIndex == '/publication'" :is-mobile="isMobile"></publication>
    <projects v-else-if="activeIndex == '/projects'" :is-mobile="isMobile"></projects> 
    <people v-else-if="activeIndex == '/people'" :is-mobile="isMobile"> </people>
    <contact v-else-if="activeIndex == '/contact'" :is-mobile="isMobile"> </contact>
    <home v-else></home>
    <my_footer  :is-fix="(activeIndex == '/publication')" v-if="!(activeIndex=='/contact')" ></my_footer>
  </div>

</template>

<script>
import home from './components/home'
import my_header from "@/components/my_header";
import my_footer from "@/components/my_footer";
import news from "@/components/news";
import publication from "@/components/publication";
import projects from "@/components/projects";
import people from "@/components/people";
import contact from "./components/contact";
import vueToTop from "vue-totop"
// vue.use(vueToTop);
export default {
  name: 'app',
  data() {
    return {
      activeIndex: '/home',
      activeIndex2: '1',
      isMobile: false,
      wsheight: window.screen.height,
      dbheight: document.body.clientHeight,
    }
  },
  components: {
      home,
      my_header,
      my_footer,
      news,
      publication,
      people,
      projects,
      vueToTop,
      contact
  },
  watch: {
    activeIndex: function (newQuestion, oldQuestion) {
      this.$nextTick(function () {
        this.wsheight = window.screen.height;
        this.dbheight = document.body.scrollHeight;
      })
      if (newQuestion == oldQuestion) return;
      else {
        // switch (newQuestion) {
        //   case "1":
        //     window.location.href = window.location.host + "/home";
        //     break;
        //   case "2":
        //     window.location.href = window.location.host + "/publication";
        //     break;
        //   case "3":
        //     window.location.href = window.location.host + "/projects";
        //     break;
        //   case "4":
        //     window.location.href = window.location.host + "/people";
        //     break;
        //   case "5":
        //     window.location.href = window.location.host + "/news";
        //     break;
        //   case "6":
        //     window.location.href = window.location.host + "/contact";
        //     break;
        //   default:
        //     window.location.href = window.location.host + "/home";
        // }
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
      this.activeIndex = key;
    }
  },
  mounted() {
    let url = window.location.href;
    window.console.log(url)
    if (url.indexOf("home") != -1){
      this.activeIndex = '/home';
    }else if (url.indexOf("publication") != -1){
      this.activeIndex = '/publication';
    }else if (url.indexOf("projects") != -1){
      this.activeIndex = '/projects';
    }else if (url.indexOf("people") != -1){
      this.activeIndex = '/people';
    }else if (url.indexOf("news") != -1){
      this.activeIndex = '/news';
    }else if (url.indexOf("contact") != -1){
      this.activeIndex = '/contact';
    }
    this.$nextTick(function() {
      let w = document.documentElement.offsetWidth || document.body.offsetWidth;
      if(w < 1000){
        this.isMobile = true;
      }
      this.wsheight = window.screen.height;
      this.dbheight = document.body.scrollHeight;
    });
  }
}
</script>

<style scoped lang="less">
#app {
  /*background-color: rgb(221, 248, 250);*/
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
