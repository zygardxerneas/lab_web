<template>
    <div class="my_header">
        <div class="lab_name">
            <span class="lab_name_text">
                东南大学智慧物联网中心
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my_header",
        data() {
            return {
            };
        },
        methods: {

        },
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
            font-size: 0.8rem;
            text-align: center;
            color: white;
        }
    }

}
</style>