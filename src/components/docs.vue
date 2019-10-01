<template>
    <div class="docs">
        <div class="title">docs</div>
        <el-table
                :data="files"
                style="width: 100%">
            <el-table-column
                    label="日期"
                    width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="文件名"
                    width="240">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
<!--                    <el-popover trigger="hover" placement="top">-->
<!--                        <p>姓名: {{ scope.row.name }}</p>-->
<!--                        <p>住址: {{ scope.row.address }}</p>-->
<!--                        <div slot="reference" class="name-wrapper">-->
<!--                            <el-tag size="medium">{{ scope.row.name }}</el-tag>-->
<!--                        </div>-->
<!--                    </el-popover>-->
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleDownload(scope.$index, scope.row)">下载</el-button>
                    <a :href="scope.row.url" class="link-details" title="下载文件" :download="scope.row.name">下载</a>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "docs",
        data() {
            return {
                files: [],
            }
        },
        methods: {
            handleDownload(i, r){
                window.console.log(i, r);
                window.open(r.url);
                // window.open(r.url, '_blank').location;
            }
        },
        mounted(){
            // let fso=new ActiveXObject("Scripting.FileSystemObject");
            // let s=fso.GetFolder("../documents");
            // let fn=new Enumerator(s.files);
            // for(;!fn.atEnd();fn.moveNext()){
            //     this.files.push(fn.item)
            // }
            // debugger;
            this.files.push({
                name: "会议费报销-2019-03",
                url: require("../documents/会议费报销-2019-03.zip"),
                // url: require("../assets/孙凯.jpg"),
                date: "2019-05-01",
            });
            this.files.push({
                name: "固定资产报销流程",
                url: require("../documents/固定资产报销流程.docx"),
                date: "2019-06-01",
            });
            this.files.push({
                name: "审稿流程",
                url: require("../documents/审稿流程4.0.docx"),
                date: "2019-08-01",
            });
            this.files.push({
                name: "材料报销流程",
                url: require("../documents/材料报销流程.docx"),
                date: "2019-06-10",
            });
            this.files.push({
                name: "横幅 展板电子屏 审批流程",
                url: require("../documents/横幅 展板电子屏 审批流程.docx"),
                date: "2019-04-01",
            });
            this.files.push({
                name: "财务系统申报学生酬金步骤",
                url: require("../documents/财务系统申报学生酬金步骤.pdf"),
                date: "2019-04-02",
            });
        }
    }
</script>

<style scoped lang="less">
    .docs{
        padding: 0 10%;
        margin-top: 1rem;
        .title{
            padding: 0.2rem 1rem;
            font-size: 0.6rem;
            background-color: rgb(81, 47, 242);
            color: white;
        }
    }
</style>