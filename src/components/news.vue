<template>
    <div class="news">
        <div class="title">NEWS</div>
        <div class="news-block" :class="isMobile? 'mobile': ''">
            <news_item v-for="item in news" :newsitem="item" :key="item.title">
            </news_item>
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
            }
        },
        mounted() {
            for (let i=1;i<=3;i++) {
                this.news.push({
                    title: "这是第" + i + "条新闻",
                    abstract: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
                    img: require("../assets/logo.png"),
                    url: "https://cn.vuejs.org/v2/guide/index.html",
                })
            }
            this.news.push({
                title: "这是第" + 4 + "条新闻",
                abstract: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
                img: require("../assets/sunkai.jpg"),
                url: "https://cn.vuejs.org/v2/guide/index.html",
            })
        }
    }
</script>

<style scoped lang="less">
    .news{
        padding: 0 15%;
        margin-top: 1rem;
        .title{
            padding: 0.2rem 1rem;
            font-size: 0.6rem;
            background-color: rgb(81, 47, 242);
            color: white;
        }
        .news-block{
            margin-top: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .mobile{
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
    }
</style>