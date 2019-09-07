<template>
    <div class="my_header">
        <div class="lab_name">
            <span class="lab_name_text">
                东南大学智慧物联网中心
            </span>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">HOME</el-menu-item>
            <el-menu-item index="2">PBULICATIONS</el-menu-item>
            <el-menu-item index="3">PROJECTS</el-menu-item>
            <el-menu-item index="4">PEOPLE</el-menu-item>
            <el-menu-item index="5">NEWS</el-menu-item>
            <el-menu-item index="6" style="color: rgba(229, 28, 35, 1)">CONTACT</el-menu-item>
<!--            <el-submenu index="2">-->
<!--                <template slot="title">我的工作台</template>-->
<!--                <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--                <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--                <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--                <el-submenu index="2-4">-->
<!--                    <template slot="title">选项4</template>-->
<!--                    <el-menu-item index="2-4-1">选项1</el-menu-item>-->
<!--                    <el-menu-item index="2-4-2">选项2</el-menu-item>-->
<!--                    <el-menu-item index="2-4-3">选项3</el-menu-item>-->
<!--                </el-submenu>-->
<!--            </el-submenu>-->
<!--            <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
<!--            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "my_header",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                window.console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="less">
.my_header{
    .lab_name{
        box-sizing: border-box;
        padding: 1% 0;
        background-color: rgb(41, 16, 157);
        display: flex;
        justify-content: center;
        align-content: center;
        .lab_name_text{
            font-size: 2rem;
            text-align: center;
            color: white;
        }
    }
    .el-menu{
        padding-left: 10%;
        padding-right: 10%;
        font-size: 24px;
        display: flex;
        justify-content: center;
        .el-submenu__title{
            font-size: 24px;
        }
        .el-menu-item{
            font-size: 24px;
        }
    }
}
</style>