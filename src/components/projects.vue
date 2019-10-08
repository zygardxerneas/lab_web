<template>
  <div class="projects" :style="isMobile? 'padding: 0.2rem 0.4rem': 'padding: 0.4rem 1rem'">
	<el-backtop target=".projects"></el-backtop>
    <!-- <el-backtop target=".projects" :right="80" :bottom="80"></el-backtop> -->
    <div v-for="item in currentProjects" :key="item" class="projects-item">
      <el-row>
        <el-col :span="8" class="projects-aside">
          <div>
            <h1>{{item.title}}</h1>
            <img :src="item.url" class="projects-image" @click="on_click_img(item.url)" />
          </div>
        </el-col>
        <el-col :span="10" class="projects_introduction">{{item.introduction}}</el-col>
      </el-row>
    </div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="this.projects.length"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "projects",
  data() {
    return {
      isMobile: false,
      projects: [
        {
          title: "第一个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "第二个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/sunkai.jpg")
        },
        {
          title: "3rd个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "the fourth个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "Ⅴ项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "第二个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/sunkai.jpg")
        },
        {
          title: "3rd个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "the fourth个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "Ⅴ项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "第二个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/sunkai.jpg")
        },
        {
          title: "3rd个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "the fourth个项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        },
        {
          title: "Ⅴ项目",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/logo.png")
        }
      ],
      pageSize: 10,
      currentPage: 0,
      currentProjects: []
    };
  },
  methods: {
    on_click_img: function(index) {
      console.log(index);
    },
    handleCurrentChange(val) {
      this.currentPage = val - 1;
    }
  },
  watch: {
    currentPage() {
      this.currentProjects = [];
      for (
        let i = this.currentPage * this.pageSize;
        i < (this.currentPage + 1) * this.pageSize && i < this.projects.length;
        i++
      ) {
        this.currentProjects.push(this.projects[i]);
      }
    }
  },
  mounted() {
    for (let i = 0; i < this.pageSize; i++) {
      this.currentProjects.push(this.projects[i]);
    }
  }
};
</script>

<style scoped lang="less">
.projects {
  padding: 0 10%;
  margin-top: 1rem;
  // display: flex;
  .projects-item {
    margin: 0 auto;
    border-bottom: 3px solid rgb(81, 47, 242);
    width: 950px;
    // display: flex;
    .projects-aside {
      text-align: left;
      float: left;
      // display: inline-block;
      .projects-image {
        height: 200px;
        width: 200px;
      }
    }
    .projects_introduction {
      text-align: justify;
      font-size: 16px;
      width: 60%;
      float: left;
      margin-top: 20px;
      // margin: 20px 20px 0 50px;
      line-height: 20px;
      // display: inline-block;
    }
  }
}
</style>>