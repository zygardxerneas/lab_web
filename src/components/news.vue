<template>
    <div class="news">
        <div class="news-block" :class="isMobile? 'mobile': ''">
            <news_item v-for="item in currentNews" :newsitem="item" :key="item.title">
            </news_item>
        </div>
        <div class="page">
            <el-pagination
                    small
                    layout="prev, pager, next"
                    :page-size="pageSize"
                    :total="5"
                    @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import news_item from "@/components/news_item";
    export default {
        name: "news",
        components: {
            news_item,
        },
        props: ["isMobile"],
        data() {
            return {
                news: [],
                currentPage: 0,
                pageSize: 4,
                currentNews: []
            }
        },
        watch: {
            currentPage() {
                this.currentNews = [];
                for (let i=this.currentPage*this.pageSize; i<(this.currentPage+1)*this.pageSize && i<this.news.length;i++)
                    this.currentNews.push(this.news[i]);
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.currentPage = val-1;
            }
        },
        mounted() {
            for (let i=1;i<=4;i++) {
                /*this.news.push({
                    title: "这是第" + i + "条新闻",
                    abstract: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
                    img: require("../assets/logo.png"),
                    url: "https://cn.vuejs.org/v2/guide/index.html",
                })*/
            }

            this.news.push({
                title: "UbiComp 2019",
                abstract: "The 2019 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp 2019) has been held in London, UK, colocated with ISWC 2019.",
                img: require("../assets/news/ubicomp_2019.jpg"),
                url: "http://ubicomp.org/ubicomp2019/index.html",
            });
            this.news.push({
                title: "WWW 2019",
                abstract: "THE WEB CONFERENCE 2019 \n 30 years of the web \n San Francisco\n" +
                    "May 13-17, 2019",
                img: require("../assets/news/www_2019.jpg"),
                url: "https://www2019.thewebconf.org/",
            });
            for (let i=this.currentPage*this.pageSize; i<(this.currentPage+1)*this.pageSize && i<this.news.length;i++)
                this.currentNews.push(this.news[i]);
        }
    }
</script>

<style scoped lang="less">
    .news{
        padding: 0 10%;
        margin-top: 1rem;
        .title{
            padding: 0.2rem 1rem;
            font-size: 0.6rem;
            background-color: rgb(81, 47, 242);
            color: white;
        }
        .news-block{
            margin-top: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .news-item{
            margin-top: 0;
        }
        .mobile{
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
        .page{
            margin-top: 0.5rem;
            display: flex;
            justify-content: flex-end;
            text-align: center;
        }
    }
</style>