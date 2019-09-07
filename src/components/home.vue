<template>
    <div class="home">
        <div class="head_pic">
            <el-carousel>
                <el-carousel-item v-for="item in imgs" :key="item" style="display: inline-flex;justify-content: center;align-content: end">
<!--                    <span class="small">{{ item }}</span>-->
                    <img :src="item.url" style="width: 100%;height: 100%"  @click="on_click_img(item.id)">
                </el-carousel-item>
            </el-carousel>
        </div>
        <hr align="center" width="100%" color="#29109d" SIZE="10" style="margin-top: 20px">
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                imgs: [],
            }
        },
        methods: {
            on_click_img: function (index) {
                window.console.log(index);
            }
        },
        mounted() {
            for (let i=0;i<3;i++) {
                this.imgs.push({url: require("../assets/logo.png"), id: i});
            }
        }
    }
</script>

<style scoped lang="less">
    .home{
        .head_pic{
            margin-top: 20px;
            padding-left: 15%;
            padding-right: 15%;
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

            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
    }
</style>