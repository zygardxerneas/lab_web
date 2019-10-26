<template>
  <div class="home">
    <!-- <el-backtop></el-backtop> -->
    <div class="head_pic">
      <el-carousel :height="isMobile? '': '500px'">
        <el-carousel-item
          v-for="item in imgs"
          :key="item"
          style="display: inline-flex;justify-content: center;align-content: end">
          <!--<span class="small">{{ item }}</span>-->
          <img :src="item.url" style="width: 100%;height: 100%; background-size:cover;" @click="on_click_img(item.id)" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <hr align="center" width="100%" color="#409EFF" size="10" style="margin-top: 1rem" />
    <div class="introduction">
      <div class="title">实验室简介</div>
      <div class="text">{{introduction_text}}</div>
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
    for (let i = 0; i < 1; i++) {
      this.imgs.push({ url: require("../assets/use.jpg"), id: i });
    }
    this.imgs.push({ url: require("../assets/ubicomp2019.jpg")});
    this.introduction_text =
      "东南大学智慧物联网中心,实验室研究方向包括：物联网，大数据分析，无线网络，移动通信技术；实验室地点：金智楼305、307,实验室成员情况：何田教授，王帅教授，博士生两名，硕士生六名，本科生十名；\n何田教授简介： ACM/IEEE Fellow, 国家千人，在顶级期刊和著名国际会议上发表300余篇文章（Google Scholar 被引用次数超过 22,000 次 H-Index 65）。现任包括ACM/IEEE TON，IEEE TC, ACM TOSN在内的七个国际期刊的编委，获八项国际会议的最佳论文奖（包括业界顶会MobiCom，SenSys和ICDCS）。\n王帅教授简介：在国内外期刊IEEE/ACM TON、TPDS、TOC、TOSN、TWC和会议MobiCom、WWW、UbiComp、INFOCOM、SenSys、ICNP、BIGDATA发表论文二十余篇。欢迎对物联网以及大数据方向感兴趣的大二大三同学积极报名加入实验室、参与到实验室相关科研项目中来。";
    this.news = [
      {
        title: "第一条新闻",
        time: "2019-09-08",
        url: "https://www.baidu.com"
      },
      {
        title: "1 paper is accepted by WWW 2019 about .",
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
      /*background-color: rgb(81, 47, 242);*/
      background-color: #3895bf;
      color: white;
    }
    .text {
      margin-top: 1rem;
      padding: 0.4rem 1rem;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 20px,
        rgba(0, 0, 0, 0.04) 0 0 20px;
      font-size: 0.4rem;
      text-align: justify;
      line-height: 35px;
      font-family: "Lucida Console";
    }
    .news {
      margin-top: 1rem;
      box-shadow: rgba(0, 0, 0, 0.12) 0 2px 20px,
        rgba(0, 0, 0, 0.04) 0 0 20px;
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