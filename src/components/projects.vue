<template>
  <div class="projects">
<!--    <div class="title" >PROJECTS</div>-->
    <div v-for="item in currentProjects" :key="item" class="projects-item" :style="isMobile? 'width: 95%': ''">
        <div v-if="isMobile">
            <div>
                <h1>{{item.title}}</h1>
                <img :src="item.url" style="width: 90%;" @click="on_click_img(item.url)" />
            </div>
            <div style="padding: 0.5rem 0.2rem;text-align: left">
                {{item.introduction}}
            </div>
        </div>
        <div v-else>
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
    </div>
    <div class="projects-item" :style="isMobile? 'width: 90%': ''">
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
      projects: [
        {
          title: "Physical-Layer CTC",
          introduction:
            "Recent advances in Cross-Technology Communication (CTC) have improved efficient coexistence and cooperation among heterogeneous wireless devices (e.g., WiFi, ZigBee, and Bluetooth) operating in the same ISM band. However, until now the effectiveness of existing CTCs, which rely on packet-level modulation, is limited due to their low throughput (e.g., tens of bps). Our work, named WEBee, opens a promising direction for high-throughput CTC via physical-level emulation. WEBee uses a high-speed wireless radio (e.g., WiFi OFDM) to emulate the desired signals of a low-speed radio (e.g., ZigBee). Our unique emulation technique manipulates only the payload of WiFi packets, requiring neither hardware nor firmware changes in commodity technologies -- a feature allowing zero-cost fast deployment on existing WiFi infrastructure. We designed and implemented WEBee with commodity devices (Atheros AR2425 WiFi card and MicaZ CC2420) and the USRP-N210 platform (for PHY layer evaluation).",
          url: require("../assets/projects/webee.jpg")
        },
        {
          title: "Bike Sharing System",
          introduction:
            "With the rapid development of sharing economy, massive sharing systems such as Uber, Airbnb, and bikeshare have percolated into people's daily life. The sharing economy, at its core, is to achieve efficient use of resources. The actual usage of shared resources, however, is unclear to us. Little measurement or analysis, if any, has been conducted to investigate the resource usage status with the large-scale data collected from these sharing systems. In this paper, we analyze the bike usage status in three typical bikeshare systems based on 140-month multi-event data. Our analysis shows that the most used 20% of bikes account for 45% of usage, while the least used 20% of bikes account for less than 1% of usage. To efficiently utilize shared bikes, we propose a usage balancing design called eShare which has three components: (i) a statistical model based on archived data to infer historical usage; (ii) an entropy-based prediction model based on both real-time and archived data to infer future usage; (iii) a model-driven optimal calibration engine for bike selection to dynamically balance usage.",
          url: require("../assets/projects/bike_sharing_systems.jpg")
        },
        {
          title: "Packet-Level CTC",
          introduction:
            "FreeBee enables direct unicast as well as cross-technology/channel broadcast among three popular wireless technologies: WiFi, ZigBee, and Bluetooth. Our design aims to shed the light on the opportunities that cross-technology communication has to offer including, but not limited to, cross-technology cooperation and coordination. The key concept of FreeBee is to modulate symbol messages by shifting the timing of periodic beacon frames already mandatory for wireless standards without incurring extra traffic. Such a generic cross-technology design consumes zero additional bandwidth, allowing continuous broadcast to safely reach mobile and/or duty-cycled devices. A new interval multiplexing technique is proposed to enable concurrent broadcasts from multiple senders or boost the transmission rate of a single sender.",
          url: require("../assets/projects/freebee.png")
        },
        {
          title: "BRAVO",
          introduction:
            "Bike sharing systems, which provide a convenient commute choice for short trips, have emerged rapidly in many cities. While bike sharing has greatly facilitated people's commutes, those systems are facing a costly maintenance issue -- rebalancing bikes among stations. We observe that existing systems frequently suffer situations such as no-bike-to-borrow (empty) or no-dock-to-return (full) due to existing ad hoc rebalancing practice. To address this issue, we provide systematic analysis on user trip data, station status data, rebalancing data, and meteorology data, and propose BRAVO - the first practical data-driven bike rebalancing app for operators to improve bike sharing service while reducing the maintenance cost. Specifically, leveraging experiences from two-round round-the-clock field studies and comprehensive information from four data sets, a data-driven model is proposed to capture and predict the safe rebalancing range for each station. Based on this safe rebalancing range, BRAVO computes the optimal rebalancing amounts for the full and empty stations to minimize the rebalancing cost.",
          url: require("../assets/projects/bravo.jpg")
        }

      ],
      pageSize: 4,
      currentPage: 0,
      currentProjects: []
    };
  },
  props: ["isMobile"],
  methods: {
    on_click_img: function(index) {
        // eslint-disable-next-line no-console
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
  margin-top: 1rem;
  .title{
    margin-top: 0.05rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.6rem;
    text-align: center;
    background-color: rgb(81, 47, 242);
    color: white;
  }
  .projects-item {
    margin: 0 auto;
    border-top: 3px solid rgb(79, 139, 242);
    width: 950px;
    .projects-aside {
      text-align: left;
      float: left;
      .projects-image {
        height: 200px;
        width: 250px;
      }
    }
    .projects_introduction {
      text-align: justify;
      text-justify: inter-word;
      font-size: 15px;
      width: 66.66666666666666666%;
      float: left;
      margin-top: 0.3rem;
      line-height: 25px;
    }
    .el-pagination{
        padding-top: 0.5rem;
    }
  }
}
</style>>