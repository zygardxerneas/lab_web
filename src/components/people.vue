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

        <div class="faculty"> 
            <div class="faculty-item">
                <el-row>
                    <el-col span ="11"></el-col>
                    <el-col span ="11" offset="1"></el-col>
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
        return[
            {
                name:"1",
                photo:"",
                desc:"是个好人"
            },
                        {
                name:"2",
                photo:"",
                desc:"是个好人"
            },
                        {
                name:"3",
                photo:"",
                desc:"是个好人"
            },
                        {
                name:"4",
                photo:"",
                desc:"是个好人"
            },
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
        .faculty{
            padding-left:5%; 
            height: .1rem;
            border: 0.2rem; 
            border-color: aqua;
        }
    }
</style>