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

        <div class="list" v-if="activeIndex=='faculty'" > 
        <div v-for="(item) in faculty" v-bind:key="item.col">
                <el-row>
                    <el-col span ="11" class="item">
                        <el-row>
                        <el-col span="10">
                        <div>
                        <img :src="item.data[0].photo" alt="picture missed" class="item-pic"/>
                        </div>
                        </el-col>
                        <el-col span="14" offset="0" class="item-desc">
                            <el-card style="height:4.5rem">
                                 <div slot="header" >
                                    <b style="font-size:0.5rem">{{item.data[0].name}}</b>
                                </div>
                               
                                {{item.data[0].desc}}
                            </el-card>
                            </el-col>
                        </el-row>
                    </el-col>``
                    <el-col span ="11" offset="1" class="item">
                        <el-row>
                        <el-col span="10">
                          <el-carddiv>
                        <img :src="item.data[1].photo" alt="picture missed" class="item-pic"/>
                        </el-carddiv>
                        </el-col>
                         <el-col span="14" offset="0" class="item-desc">
                             <el-card style="height:4.5rem">
                                <div slot="header" >
                                    <b style="font-size:0.5rem">{{item.data[1].name}}</b>
                                </div>
                                {{item.data[1].desc}}
                            </el-card>
                             </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                </div>
            </div>
        <div class="list" v-if="activeIndex=='student'" > 
        <div v-for="(item) in student" v-bind:key="item.col">
                <el-row>
                    <el-col span ="11" class="item">
                        <el-row>
                        <el-col span="10">
                        <div>
                        <img :src="item.data[0].photo" alt="picture missed" class="item-pic"/>
                        </div>
                        </el-col>
                        <el-col span="14" offset="0" class="item-desc">
                            <el-card style="height:4.5rem">
                                 <div slot="header" >
                                    <b style="font-size:0.5rem">{{item.data[0].name}}</b>
                                </div>
                               
                                {{item.data[0].desc}}
                            </el-card>
                            </el-col>
                        </el-row>
                    </el-col>``
                    <el-col span ="11" offset="1" class="item">
                        <el-row>
                        <el-col span="10">
                          <el-carddiv>
                        <img :src="item.data[1].photo" alt="picture missed" class="item-pic"/>
                        </el-carddiv>
                        </el-col>
                         <el-col span="14" offset="0" class="item-desc">
                             <el-card style="height:4.5rem">
                                <div slot="header" >
                                    <b style="font-size:0.5rem">{{item.data[1].name}}</b>
                                </div>
                                {{item.data[1].desc}}
                            </el-card>
                             </el-col>
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
            student:[],
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
                            name:"大佬一号",
                            photo:require("../assets/sunkai.jpg"),
                            desc: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" 
                        },
                        {
                            id:2,
                            name:"大佬二号",
                            photo:require("../assets/sunkai.jpg"),
                            desc: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" 
                        }]},
                    {   col:2,
                        data:[{
                        id:3,
                            name:"大佬三号",
                            photo:require("../assets/sunkai.jpg"),
                            desc: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" 
                        },
                        {
                            id:4,
                            name:"大佬四号",
                            photo:require("../assets/sunkai.jpg"),
                            desc: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" 
                       
                        }]},
                ]
        this.student=[
                    {
                        col:1,
                        data:[{
                            id:1,
                            name:"学生一号",
                            photo:require("../assets/sunkai.jpg"),
                            desc: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" 
                        },
                        {
                            id:2,
                            name:"学生二号",
                            photo:require("../assets/sunkai.jpg"),
                            desc: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" 
                        }]},
                    {   col:2,
                        data:[{
                        id:3,
                            name:"学生三号",
                            photo:require("../assets/sunkai.jpg"),
                            desc: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" 
                        },
                        {
                            id:4,
                            name:"学生四号",
                            photo:require("../assets/sunkai.jpg"),
                            desc: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" +
                        "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介" 
                       
                        }]},
                ]
    }
}
</script>


<style scoped lang="less">
    .people{
        padding: 0 10%;
        margin-top: 1rem;
        .title{
            padding: 0.2rem 1rem;
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
        .list{
            padding-left:0%; 
            height: .1rem;
            border: 0.2rem; 
            border-color: aqua;
            .item{
                padding-bottom:5%; 
                border: 0.5rem;
                border-color: aqua;
                .item-desc{
                    // margin-left: 0.2rem;
                    text-align: justify;
                }
                .item-pic{
                    height:4.5rem;
                }
            }

        }
    }

</style>