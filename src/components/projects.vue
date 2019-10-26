<template>
  <div class="projects">
<!--    <div class="title" >PROJECTS</div>-->
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
    <div class="projects-item">
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
          title: "CTC",
          introduction:
            "The proliferation of wireless technologies has greatly benefited people's daily life. However, these wireless technologies coexist in the same or overlapping channels (e.g., ISM bands), and are heaviliy affected by the cross-technology interference (CTI), due to the incompatible PHY/MAC standards. Previous designs are mainly focused on the improvement of unicast communication, trying to improve the performance on individual wireless links from high interference. This limitation calls for the investigation of spectrum efficiency of broadcast under CTI. We will revisit the classical definition of spectrum efficiency in the context of broadcast, because the total aggregated throughput is also subjected to the number of involved receivers and their reception relationship.",
          url: require("../assets/ctc.jpg")
        },
        {
          title: "Smart button",
          introduction:
            "This project aims to build Smart Buttons, a bio-enabled wearable device weighing less than 2 grams. Instead of building yet-another miniaturized wearable device, a transformative architecture is created where the designconstraints (e.g., form factor, cost and energy) make it critically necessary to leverage bio-enabled functions to achieve a feasible design. Specifically, a network of smart buttons will be built that scales from a few buttons for each person individually to over a hundred of buttons for a crowd. This network simultaneously records, generates, compiles posture and interaction data spanning various scenarios, time scales and physical settings. The smart button platform will be able to assist domain scientists in understanding human posture and behavior as well as social interaction in a crowd.",
          url: require("../assets/button.jpg")
        },
        {
          title: "ITS",
          introduction:
            "The traditional design of urban transit services has been based on limited sampling data collected through surveys and censuses, which are often dated and incomplete. The theory and practice of transit services have also typically focused on isolated individual transportation modes. These two limitations result in unsatisfactory passenger experiences, such as unnecessary detours and prolonged travel delays. Fortunately, a new opportunity to address these limitations has arisen in recent years: the latest expansion of urban information infrastructure enables us to model behaviors of urban transportation systems with massive multi-modal online feeds and to apply effective local and global cyber-control. Our work will transform the efficiency of existing transportation systems because (i) in addition to macro-level historical statistics, the availability of massive micro-level trip information will make it possible to apply fine-grained real-time control to handle rapid changes in dynamic urban environments and (ii) aggregated information from multi-modal transit allows more effective inter-transit coordination.",
          url: require("../assets/its.jpg")
        },
        {
          title: "Physical-Layer CTC",
          introduction:
            "Recent advances in Cross-Technology Communication (CTC) have improved efficient coexistence and cooperation among heterogeneous wireless devices (e.g., WiFi, ZigBee, and Bluetooth) operating in the same ISM band. However, until now the effectiveness of existing CTCs, which rely on packet-level modulation, is limited due to their low throughput (e.g., tens of bps). Our work, named WEBee, opens a promising direction for high-throughput CTC via physical-level emulation. WEBee uses a high-speed wireless radio (e.g., WiFi OFDM) to emulate the desired signals of a low-speed radio (e.g., ZigBee). Our unique emulation technique manipulates only the payload of WiFi packets, requiring neither hardware nor firmware changes in commodity technologies – a feature allowing zero-cost fast deployment on existing WiFi infrastructure. We designed and implemented WEBee with commodity devices (Atheros AR2425 WiFi card and MicaZ CC2420) and the USRP-N210 platform (for PHY layer evaluation). Our comprehensive evaluation reveals that WEBee can achieve a more than 99% reliable parallel CTC between WiFi and ZigBee with 126 Kbps in noisy environments, a throughput about 16,000x faster than current state-of-the-art CTCs.",
          url: require("../assets/webee.png")
        }

      ],
      pageSize: 4,
      currentPage: 0,
      currentProjects: []
    };
  },
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