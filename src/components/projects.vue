<template>
  <div class="projects">
    <div v-for="item in projects" :key="item" class="projects_item">
      <div class="project">
        <el-col :span="4">
          <el-row class="project_title">
            <div class="title">{{item.title}}</div>
          </el-row>
          <el-row class="project_image">
            <div class="image">
              <img :src="item.url" @click="on_click_img(item.url)">
            </div>
          </el-row>
        </el-col>
        <el-col :span="5"></el-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"projects",
    data(){
        return {
            isMobile: false,
            projects: []
        }
    },
    methods: {
        on_click_img: function(index){
            console.log(index);
        }
    },
    mounted(){
        this.projects=[
            {
                title: "第一个项目",
                introduction: "第一个简介",
                url: require("../assets/logo.png")
            },{
                title: "第二个第二个第二个第二个第二个第二个第二个第二个第二个第二个第二个第二个第二个第二个第二个第二个第二个项目",
                introduction: "第二个简介",
                url: require("../assets/logo.png")
            }
        ];
    }
}
</script>>