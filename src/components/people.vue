<template>
  <div class="people">
    <el-menu :default-active="activeIndex" class="select" mode="horizontal"
             @select="handleSelect" background-color="#fff" active-text-color="#ffd04b">

      <el-menu-item class="select-item" index="faculty">Faculty</el-menu-item>
      <el-menu-item class="select-item" index="student">Student</el-menu-item>
      <el-menu-item class="select-item" index="link">Future</el-menu-item>
    </el-menu>

    <div class="list" v-if="activeIndex=='faculty'">
      <div v-if="!isMobile">
        <div v-for="(item) in faculty" v-bind:key="item.col">
          <el-row :gutter="20">
              <el-col :span=24 class="item">
                <el-card shadow="hover">
                  <el-row>
                    <el-col :span=6>
                      <img @click="goToUrl(item.data[0].url)" :src="item.data[0].photo" alt="picture missed" class="item-pic"  />
                    </el-col>
                    <el-col :span=18 offset=0 class="item-desc">
                      <el-card style="height:4.5rem">
                        <div slot="header">
                          <b style="font-size:19px">{{item.data[0].name}}</b>
                        </div>
                        <div style="font-size:15px; " v-html="item.data[0].desc"></div>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
<!--              <el-col :span=24 class="item">-->
<!--                <el-card shadow="hover" @click="goToUrl(item.data[0].url)">-->
<!--                  <el-row>-->
<!--                    <el-col :span=6>-->
<!--                      <img  @click="goToUrl(item.data[1].url)" :src="item.data[1].photo" alt="picture missed" class="item-pic" />-->
<!--                    </el-col>-->
<!--                    <el-col :span=18 offset=0 class="item-desc">-->
<!--                      <el-card style="height:4.5rem">-->
<!--                        <div slot="header">-->
<!--                          <b style="font-size:19px">{{item.data[1].name}}</b>-->
<!--                        </div>-->
<!--                        <div style="font-size:15px;" v-html="item.data[1].desc"></div>-->
<!--                      </el-card>-->
<!--                    </el-col>-->
<!--                  </el-row>-->
<!--                </el-card>-->
<!--              </el-col>-->
          </el-row>
        </div>
      </div>
      <div v-else>
        <div v-for="(item) in faculty[0].data" v-bind:key="item">
          <div class="item" style="width: 100%" @click="goToUrl(item.url)">
            <el-card shadow="hover">
              <el-row>
                <el-col span=10>
                  <img :src="item.photo" alt="picture missed" style="width: 100%;height: 4rem" />
                </el-col>
                <el-col span=14 offset=0 class="item-desc">
                  <el-card style="height:4rem" body-style="padding: 10px">
                    <div>
                      <b style="font-size:0.2rem">{{item.name}}</b>
                    </div>
                    <br>
                    <div v-html="item.desc" style="font-size: 0.1rem"></div>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </div>
      </div>
    </div>

    <div class="list" v-if="activeIndex=='student'">
      <div v-for="(item) in student" v-bind:key="item.col">
        <el-row>
          <el-col :span="24" class="item">
            <el-card shadow="hover">
              <el-row>
                <el-col span="10">
                  <img :src="item.data[0].photo" alt="picture missed" class="item-pic" />
                </el-col>
                <el-col span="14" offset="0" class="item-desc">
                  <el-card style="height:4.5rem">
                    <div slot="header">
                      <b style="font-size:19px">{{item.data[0].name}}</b>
                    </div>
                    <div v-html="item.data[0].desc"></div>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col span="24" offset="1" class="item">
            <el-card shadow="hover">
              <el-row>
                <el-col span="10">
                  <img :src="item.data[1].photo" alt="picture missed" class="item-pic" />
                </el-col>
                <el-col span="14" offset="0" class="item-desc">
                  <el-card style="height:4.5rem">
                    <div slot="header">
                      <b style="font-size:19px">{{item.data[1].name}}</b>
                    </div>
                    <div  v-html="item.data[1].desc"></div>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "people",
  props: ["isMobile"],
  data() {
    return {
      faculty: [],
      student: [],
      activeIndex: "faculty"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
      this.activeIndex = key;
    },
    goToUrl(url){
      window.location.href = url;
    }
  },
  mounted() {
    this.faculty = [
      {
        col: 1,
        data: [
          // {
          //   id: 1,
          //   name: "TIAN HE",
          //   photo: require("../assets/people/hetian.jpg"),
          //   url: "http://www-users.cs.umn.edu/~tianhe/index.html",
          //   desc:
          //     "IEEE/ACM Fellow<br/>" +
          //           "Director, SING(Southeast University Information and Network Group)<br/><br/>" +
          //           "Research Interests: Wireless Coexistence, Posture/Behavior Estimation, " +
          //           "Social Interaction Monitoring, " +
          //           "Large-Scale Intelligent Transportation Systems (road network efficiency and safety), " +
          //           "Rechargeable Sensor Systems/Battery Array Management/Safe Charging.<br/><br/>" +
          //           "Email: tianhe@seu.edu.cn"
          // },
          {
            id: 1,
            name: "SHUAI WANG",
            photo: require("../assets/people/wangshuai.jpg"),
            url: "https://scholar.google.com/citations?hl=zh-CN&user=gfDfZqAAAAAJ&view_op=list_works&sortby=pubdate",
            desc:
              "Professor, School of Computer Science and Engineering, Southeast University<br/>Executive Director, SING(Southeast University Information and Network Group)" +
                    "<br/><br/>Research Interests: Internet of Things, Data Analytics, " +
                    "Wireless Networks And Sensors.<br/><br/>" +
                    "Email: shuaiwang@seu.edu.cn<br/>Phone Number: 17867966559"
          }
        ]
      }
    ];
    this.student = [

    ];
  }
};
</script>


<style scoped lang="less">
.people {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 3%;
  .title {
    margin-top: 0.1rem;
    padding: 0.2rem 1rem;
    font-size: 0.6rem;
    text-align: center;
    background-color: rgb(81, 47, 242);
    color: white;
  }
  .select {
    background-color: white;
    text-align: center;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
    .select-item {
      font-size: 0.4rem;
      a{
        text-decoration:none;
      }
    }
  }
  .list {
    height: 100%;
    display: flex;
    justify-content: center;
    font-family: 'Times New Roman';
    .item {
      padding-bottom: 2%;
      .item-desc {
        font-size: 14px;
        text-align: left;
      }
      .item-pic {
        height: 243px;
        width: 196px;
        cursor: pointer;
      }
    }
  }
}
</style>