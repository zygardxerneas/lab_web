<template>
  <div class="people">
    <!-- <el-backtop></el-backtop> -->
<!--    <div class="title" style>PEOPLE</div>-->

    <el-menu :default-active="activeIndex" class="select" mode="horizontal"
             @select="handleSelect" background-color="#fff" active-text-color="#ffd04b">
      <el-row>
        <el-col span="3" offset="7">
          <el-menu-item class="select-item" index="faculty">Faculty</el-menu-item>
        </el-col>
        <el-col span="3">
          <el-menu-item class="select-item" index="student">Student</el-menu-item>
        </el-col>
        <el-col span="3">
          <el-menu-item class="select-item" index="link">
            <a href="www.baidu.com" target="_blank">Future</a>
          </el-menu-item>
        </el-col>
      </el-row>
    </el-menu>

    <div class="list" v-if="activeIndex=='faculty'">
      <div v-for="(item) in faculty" v-bind:key="item.col">
        <el-row>
          <el-col span="11" class="item">
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
          <el-col span="11" offset="1" class="item">
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
                    <div v-html="item.data[1].desc"></div>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="list" v-if="activeIndex=='student'">
      <div v-for="(item) in student" v-bind:key="item.col">
        <el-row>
          <el-col span="11" class="item">
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
          </el-col>``
          <el-col span="11" offset="1" class="item">
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
    }
  },
  mounted() {
    this.faculty = [
      {
        col: 1,
        data: [
          {
            id: 1,
            name: "TIAN HE",
            photo: require("../assets/tian.jpg"),
            url: "http://www-users.cs.umn.edu/~tianhe/index.html",
            desc:
              "Group Advisor,<br/>Principal Investigator,<br/>McKnight Land-Grant Professor<br/><br/><br/>tianhe@cs.umn.edu "
          },
          {
            id: 2,
            name: "SHUAI WANG",
            photo: require("../assets/wangshuai.jpg"),
            url: "http://www-users.cs.umn.edu/~ksong/",
            desc:
              "Internet of Things,<br/>Data Analytics,<br/>Wireless Networks And Sensors,<br/>Network Coding<br/><br/><br/>shuaiwang@seu.edu.cn"
          }
        ]
      }
    ];
    this.student = [
      // {
      //   col: 1,
      //   data: [
      //     {
      //       id: 1,
      //       name: "学生一号",
      //       photo: require("../assets/sunkai.jpg"),
      //       desc:
      //         "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
      //         "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介"
      //     },
      //     {
      //       id: 2,
      //       name: "学生二号",
      //       photo: require("../assets/sunkai.jpg"),
      //       desc:
      //         "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
      //         "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介"
      //     }
      //   ]
      // },
      // {
      //   col: 2,
      //   data: [
      //     {
      //       id: 3,
      //       name: "学生三号",
      //       photo: require("../assets/sunkai.jpg"),
      //       desc:
      //         "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
      //         "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介"
      //     },
      //     {
      //       id: 4,
      //       name: "学生四号",
      //       photo: require("../assets/sunkai.jpg"),
      //       desc:
      //         "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
      //         "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介"
      //     }
      //   ]
      // }
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
    .select-item {
      font-size: 0.4rem;
      a{
        text-decoration:none;
      }
    }
  }
  .list {
    padding-left: 0;
    height: 0.1rem;
    .item {
      padding-bottom: 2%;
      width: 47.9111%;
      .item-desc {
        font-size: 14px;
        text-align: left;
      }
      .item-pic {
        height: 243px;
        width: 196px;
      }
    }
  }
}
</style>