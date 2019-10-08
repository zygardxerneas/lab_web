<template>
    <div class="my_footer" :class="footer-fix">
        <span @click="toTop">版权所有@ 东南大学智慧物联网中心(2019)</span>
    </div>
</template>

<script>
    export default {
        name: "my_footer",
        // props: ['isFix'],
        // methods: {
        //     toTop: function () {
        //         // document.body.scrollTop = 0;
        //         // document.documentElement.scrollTop = 0;
        //             let distance = document.documentElement.scrollTop || document.body.scrollTop;
        //             let step = distance / 50;
        //             let total = 0;
        //             if (total < distance) {
        //                 let newTotal = distance - total;
        //                 step = newTotal / 50;
        //                 smoothUp();
        //             }
        //             function smoothUp () {
        //                 if (distance > 1) {
        //                     distance -= step;
        //                     document.body.scrollTop = distance;
        //                     document.documentElement.scrollTop = distance;
        //                     setTimeout(smoothUp, 10);
        //                 } else {
        //                     document.body.scrollTop = 1;
        //                     document.documentElement.scrollTop = 1;
        //                 }
        //             }
        //     }
        // }
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
    .footer-fix{
        position: fixed;
        bottom: 0;
    }
</style>