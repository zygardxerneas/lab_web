<template>
    <div class="people">
        <el-backtop></el-backtop>
        <div class="title" style="">PEOPLE</div>
        
            
        <el-menu :default-active="activeIndex" class="select" mode="horizontal" @select="handleSelect" >
            <el-row>
            <el-col span="3" offset="7">
            <el-menu-item class="select-item" index="faculty">Faculty</el-menu-item>
            </el-col>
            <el-col span ="3">
            <el-menu-item class="select-item" index="student">Student</el-menu-item>
            </el-col>
            <el-col span ="3">
            <el-menu-item class="select-item" index="link"><a href="www.baidu.com" target="_blank">Future </a></el-menu-item>
            </el-col>
            </el-row>
        </el-menu>

        <div class="faculty" v-if="activeIndex=='faculty'" > 
        <div v-for="(item, index) in faculty" v-bind:item="item" v-bind:index="index" v-bind:key="item.col">
                <el-row>
                    <el-col span ="11">
                        <el-row>
                        <el-col span="9">
                        <img src="../assets/sunkai.jpg" alt="some_text" height="100rem"/>
                        </el-col>
                        <el-col span="14" offset="1" class="item">{{item.data[0].desc}}</el-col>
                        </el-row>
                    </el-col>``
                    <el-col span ="11" offset="1">
                        <el-row>
                        <el-col span="9">
                        <img src="../assets/sunkai.jpg" alt="some_text"/>
                        </el-col>
                         <el-col span="14" offset="1" class="item">{{item.data[1].desc}}</el-col>
                        </el-row>
                    </el-col>
                </el-row>
                </div>
            </div>
            </div>
</template>

<script>
export default {
    name: "people",
    props:["isMobile"],
    data(){
        return{
            faculty:[],
            activeIndex:"faculty"
            }
    },
    methods: {
        handleSelect(key, keyPath) {
            window.console.log(key, keyPath);
            this.activeIndex = key;
    }
    },
    mounted(){
        this.faculty= [
                    {
                        col:1,
                        data:[{
                            id:1,
                            name:"1",
                            photo:"",
                            desc:"是个好人"
                        },
                        {
                            id:2,
                            name:"2",
                            photo:"",
                            desc:"是个好人"
                        }]},
                    {   col:2,
                        data:[{
                        id:3,
                            name:"3",
                            photo:"",
                            desc:"是个好人"
                        },
                        {
                            id:4,
                            name:"4",
                            photo:"",
                            desc:"是个好人"
                        }]},
                ]
    }
}
</script>


<style scoped lang="less">
    .people{
        padding-left: 10%;
        padding-right: 10%;
        .title{
            padding-left: 10%;
            padding-right: 10%;
            font-size: 0.6rem;
            text-align: center;
            background-color: rgb(81, 47, 242);
            color: white;
        }
        .select{
            background-color:white;
            text-align: center;
            .select-item{
                font-size: 0.4rem;
            }
        }
        .faculty{
            padding-left:5%; 
            height: .1rem;
            border: 0.2rem; 
            border-color: aqua;
            .item{
                border: 0.1rem;
                border-color: aqua;
                height: 100%;
                width: 100%;
            }
        }
    }

</style>