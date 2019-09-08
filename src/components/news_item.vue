<template>
    <div class="news-item" v-if="newsitem">
        <div class="news-img" @mouseenter="enter()" @mouseleave="leave()">
            <img :src="newsitem.img" style="">
            <div class="mask" v-if="isMask">
                <div class="abstract">
                    {{newsitem.abstract}}
                </div>
            </div>
        </div>
        <div class="news-title">
            <span>{{newsitem.title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news_item",
        props: ["newsitem"],
        data() {
            return {
                isMask: false,
            }
        },
        methods: {
            enter() {
                this.isMask = true;
            },
            leave() {
                this.isMask = false;
            }
        }
    }
</script>

<style scoped lang="less">
    .news-item{
        margin-top: 0.5rem;
        width: 6rem;
        height: 7.5rem;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.04) 0px 0px 6px;
        border-radius: 5px;
        .news-img{
            width: 100%;
            height: 6.8rem;
            position: relative;
            img{
                width: 100%;
                height: 100%;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
            .mask{
                position: absolute;
                background: rgba(0, 0, 0, 0.5);
                z-index: 10;
                //设置left、right、top、bottom的原因是使得遮罩层上的文字显示在该层的最中间
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                //透明度为0，则就是不可见
                opacity: 1;
                display: flex;
                justify-content: left;
                align-items: center;
                .abstract{
                    font-size: 0.3rem;
                    margin: 0.2rem;
                    color: white;
                    text-align: left;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 14;
                    -webkit-box-orient: vertical;
                }
            }
        }
        .news-title{
            width: 100%;
            height: 0.7rem;
            font-size: 0.3rem;
            text-align: center;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>