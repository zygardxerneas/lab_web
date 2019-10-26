<template>
    <div class="contact">
        <div class="picture_seu">
            <img :src="imgs" style="width: 100%;height: 100%">
        </div>
    </div>
</template>

<script>

    export default {
        name: "contact",
        props: ["isMobile"],
        data() {
            return {
                imgs: null
            }
        },
        mounted() {
            this.imgs=require("../assets/contact.jpg");
        }
    }
</script>

<style scoped lang="less">
    .contact{
        padding-left: 10%;
        padding-right: 10%;
        .picture_seu {
            padding: 5% 10%;
        }
    }
</style>