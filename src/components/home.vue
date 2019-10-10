<template>
  <div class="home">
    <!-- <el-backtop></el-backtop> -->
    <div class="head_pic">
      <el-carousel :height="isMobile? '': '500px'">
        <el-carousel-item
          v-for="item in imgs"
          :key="item"
          style="display: inline-flex;justify-content: center;align-content: end"
        >
          <!--                    <span class="small">{{ item }}</span>-->
          <img :src="item.url" style="width: 100%;height: 100%" @click="on_click_img(item.id)" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <hr align="center" width="100%" color="#29109d" size="10" style="margin-top: 1rem" />
    <div class="introduction">
      <div class="title">实验室简介</div>
      <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{introduction_text}}</div>
    </div>
    <div class="introduction">
      <div class="title">实验室新闻</div>
      <div class="news" :style="isMobile? 'padding: 0.2rem 0.4rem': 'padding: 0.4rem 1rem'">
        <div v-for="item in news" :key="item" class="news-item" @click="to_news_item(item)">
          <el-row>
            <el-col :span="14">
              <div class="news-item-title">{{item.title}}</div>
            </el-col>
            <el-col :span="10">
              <div class="news-item-time">{{item.time}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      isMobile: false,
      imgs: [],
      introduction_text: "",
      news: []
    };
  },
  methods: {
    on_click_img: function(index) {
      window.console.log(index);
    },
    to_news_item: function(item) {
      window.console.log(item.title);
      window.location.href = item.url;
    }
  },
  mounted() {
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w < 1000) {
      this.isMobile = true;
    }
    for (let i = 0; i < 3; i++) {
      this.imgs.push({ url: require("../assets/logo.png"), id: i });
    }
    this.introduction_text =
      "这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介\n" +
      "这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介\n" +
      "这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介。";
    this.news = [
      {
        title: "第一条新闻",
        time: "2019-09-08",
        url: "https://www.baidu.com"
      },
      {
        title: "很长很长很长很长很长很长很长很长很长很长很长很长很长的标题",
        time: "2019-09-01",
        url: "https://cn.bing.com"
      }
    ];
  }
};
</script>

<style scoped lang="less">
.home {
  .head_pic {
    margin-top: 1rem;
    padding-left: 10%;
    padding-right: 10%;
    .el-carousel__item span {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 15px;
      position: absolute;
      bottom: 50px;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  .introduction {
    margin-top: 1rem;
    padding-left: 10%;
    padding-right: 10%;
    .title {
      padding: 0.2rem 1rem;
      font-size: 0.6rem;
      background-color: rgb(81, 47, 242);
      color: white;
    }
    .text {
      margin-top: 1rem;
      padding: 0.4rem 1rem;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px,
        rgba(0, 0, 0, 0.04) 0px 0px 6px;
      font-size: 0.4rem;
      text-align: left;
    }
    .news {
      margin-top: 1rem;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px,
        rgba(0, 0, 0, 0.04) 0px 0px 6px;
      font-size: 0.4rem;
      text-align: left;
      /*display: flex;*/
      /*justify-content: space-between;*/
      .news-item {
        margin-top: 0.3rem;
        cursor: pointer;
        .news-item-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .news-item-time {
          text-align: right;
        }
      }
    }
  }
}
</style>