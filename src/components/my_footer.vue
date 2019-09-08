<template>
    <div class="my_footer">
        <span @click="toTop">回到顶部</span>
    </div>
</template>

<script>
    export default {
        name: "my_footer",
        methods: {
            toTop: function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        }
    }
</script>

<style scoped lang="less">
    .my_footer{
        margin-top: 2rem;
        width: 100%;
        background-color: rgb(41, 16, 157);
        bottom: 0;
        color: white;
        font-size: 0.2rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 0.2rem;
        cursor: pointer;
    }
</style>