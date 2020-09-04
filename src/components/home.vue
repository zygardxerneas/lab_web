<template>
  <div class="home">
    <!-- <el-backtop></el-backtop> -->
    <!--<div class="head_pic">
      <el-carousel :height="isMobile? '': '600px'">
        <el-carousel-item
          v-for="(item, index) in imgs"
          :key="index"
          style="display: inline-flex;justify-content: center;align-content: end">
          &lt;!&ndash;<span class="small">{{ item }}</span>&ndash;&gt;
          <img :src="item.url" style="width: 100%;height: 100%; background-size:cover;" @click="on_click_img(item.id)" />
        </el-carousel-item>
      </el-carousel>
    </div>-->
<!--    <hr align="center" width="100%" color="#409EFF" size="10" style="margin-top: 1rem" />-->
    <div class="introduction">
      <div class="title">实验室简介</div>
<!--      <div class="title">INTRODUCTION</div>-->
      <div class="text" v-html="introduction_text"></div>
    </div>
    <div class="introduction">
      <div class="title">实验室新闻</div>
<!--      <div class="title">NEWS</div>-->
      <div class="news" :style="isMobile? 'padding: 0.2rem 0.4rem': 'padding: 0.4rem 1rem'">
        <div v-for="item in news" :key="item" class="news-item" @click="to_news_item(item)">
          <el-row style="display: flex;align-items: center">
            <el-col :span="18">

              <div class="news-item-title">
                <i class="el-icon-news" style="display: inline-block"></i>
                <span v-for="(it, i) in item.title" :style="item.isChangeTitle[i]? 'color: red;font-style: italic': ''" :key="it">
                  {{it}}
                </span>
              </div>
            </el-col>
            <el-col :span="6">
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
      // window.location.href = item.url;
    }
  },
  mounted() {
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w < 1000) {
      this.isMobile = true;
    }
    for (let i = 0; i < 1; i++) {
      this.imgs.push({ url: require("../assets/home/use_sing.jpg"), id: i });
    }
    // this.imgs.push({ url: require("../assets/home/ubicomp2019.jpg")});
    this.introduction_text =
      "<ul>" +
        "<li>实验室研究方向主要包括：物联网，大数据分析，无线网络，移动通信技术。欢迎对物联网或大数据方向感兴趣的同学申请加入实验室团队。</li>" +
        "<li>何田教授简介：ACM/IEEE Fellow，在顶级期刊和著名国际会议上发表300余篇文章（Google Scholar被引用次数超过25,000次，H-Index 73）。现任包括ACM/IEEE TON，IEEE TC, ACM TOSN在内的七个国际期刊的编委，获八项国际会议的最佳论文奖（包括业界顶会MobiCom，SenSys和ICDCS）。</li>" +
        "<li>王帅教授简介：毕业于美国明尼苏达大学计算机科学与工程系，在国内外期刊IEEE/ACM TON、TPDS、TOC、TOSN、TWC和会议MobiCom、WWW、UbiComp、INFOCOM、SenSys、ICNP、BIGDATA发表论文三十余篇。</li>";
    let url = window.location;
    this.news = [
        {  title: ["1 paper is accepted by ", "NSDI 2021", " about wireless Beacon system."],
            isChangeTitle: [false, true, false],
            time: "2020-08-30",
            url: url.origin + "/news"
        },
        // {  title: ["1 paper is accepted by ", "ICNP 2020", " about ."],
        //     isChangeTitle: [false, true, false],
        //     time: "2020-07-25",
        //     url: url.origin + "/news"
        // },
        // {  title: ["1 paper is accepted by ", "KDD 2020", " about order fulfillment cycle time estimation."],
        //     isChangeTitle: [false, true, false],
        //     time: "2020-07-07",
        //     url: url.origin + "/news"
        // },
        {  title: ["1 paper is accepted by ", "MobiCom 2020", " about indoor localization with uncertain human participation."],
            isChangeTitle: [false, true, false],
            time: "2020-07-07",
            url: url.origin + "/news"
        }, {  title: ["1 paper is accepted by ", "WWW 2020", " about web usage representativeness modeling and correction based on diverse cellular networks."],
        isChangeTitle: [false, true, false],
        time: "2020-01-11",
        url: url.origin + "/news"
        }, {
        title: ["3 papers are accepted by ", "UbiComp 2020", "."],
        isChangeTitle: [false, true, false],
        time: "2020-01-10",
        url: url.origin + "/news"
        },
        {
        title: ["1 paper is accepted by ", "TON", " about reliable cross-technology communication."],
        isChangeTitle: [false, true, false],
        time: "2019-12-28",
        url: url.origin + "/news"
        },{
        title: ["1 paper is accepted by ", "TITS", " about sensing human mobility via vehicular internet service."],
        isChangeTitle: [false, true, false],
        time: "2019-11-22",
        url: url.origin + "/news"
        },{
        title: ["1 paper is accepted by ", "UbiComp 2019", " about the impacts of anomalies on travel time of multiple transportation systems."],
        isChangeTitle: [false, true, false],
        time: "2019-09-11",
        url: url.origin + "/news"
        },{
        title: ["1 paper is accepted by ", "TMC",  " about bidirectional cross-technology communication."],
        isChangeTitle: [false, true, false],
        time: "2019-08-30",
        url: url.origin + "/news"
        },
        {
        title: ["1 paper is accepted by ", "WWW 2019",  " about bike sharing systems."],
        isChangeTitle: [false, true, false],
        time: "2019-05-13",
        url: url.origin + "/news"
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
      background-color: #3895bf;
      color: white;
    }
    .text {
      /*margin-top: 1rem;*/
      padding: 0.4rem 1rem;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 20px,
        rgba(0, 0, 0, 0.04) 0 0 20px;
      font-size: 0.4rem;
      text-align: justify;
      line-height: 35px;
      font-family: 'Times New Roman', "华文仿宋" ;
    }
    .news {
      box-shadow: rgba(0, 0, 0, 0.12) 0 2px 20px,
        rgba(0, 0, 0, 0.04) 0 0 20px;
      font-size: 0.4rem;
      text-align: left;
      .news-item {
        margin-top: 0.3rem;
        .news-item-title {
          display: inline-block;
          margin-left: 2px;
        }
        .news-item-time {
          text-align: right;
        }
      }
    }
  }
}
</style>