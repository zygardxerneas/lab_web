<template>
    <div class="my_footer" :class="footer-fix">
        <span>版权所有@ 东南大学智慧物联网研究中心(2019)</span>
    </div>
</template>

<script>
    export default {
        name: "my_footer",
    }
</script>

<style scoped lang="less">
    .my_footer{
        margin-top: 2rem;
        width: 100%;
        background-color: rgb(121, 180, 222);
        bottom: 0;
        color: white;
        font-size: 0.2rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 0.2rem;
    }
    .footer-fix{
        position: fixed;
        bottom: 0;
        font-size: medium;
    }
</style>