<template>
    <div class="publications">
        <!-- <el-backtop></el-backtop> -->
        <div class="introduction">
<!--            <div class="title"><strong>PUBLICATIONS</strong></div>-->
        </div>
        <div class="publication-papers">
            <div class="goodShow">
                <Anchor show-ink :affix="false" container=".goodShow" class="year-box" :style="isMobile? 'padding: 0': ''">
                    <AnchorLink v-for="item in publications" :key="item.year" :href="'#'+item.year" :title="item.year.toString()" class="year"></AnchorLink>
                </Anchor>
<!--                <el-timeline class="my-time-line">-->
<!--                    <el-timeline-item v-for="item in publications" :key="item.year" :timestamp="item.year" placement="top" :id="item.year" color="blue" size="large">-->

<!--                    </el-timeline-item>-->
<!--                </el-timeline>-->
<!--                <Timeline class="my-time-line">-->
<!--                    <TimelineItem v-for="item in publications" :key="item.year">-->
<!--                        <p class="time-title">{{item.year}}</p>-->
<!--                    </TimelineItem>-->
<!--                </Timeline>-->
                <div class="my-time-line" :style="isMobile? 'padding: 0': ''">
                    <div v-for="item in publications" :key="item.year" :id="item.year">
                        <div class="time-title">{{item.year}}</div>
                        <div class="paper-box">
                            <div v-for="(paper, index) in item.papers" :key="index" class="per-paper">
                                <span><strong>{{index+1}}.</strong></span>
                                <span v-for="(a, ai) in paper.author" :key="ai">
                                    <span :style="isLab(a)? 'text-decoration: underline;': ''">
                                        {{a}}
                                    </span>
                                    <span v-if="ai < paper.author.length-2">,&nbsp;</span>
                                    <span v-else-if="ai == paper.author.length-2">and</span>
                                </span>
                                <span>.&nbsp;</span>
                                <span><strong>{{paper.title}}</strong></span>
                                <span>.&nbsp;</span>
                                <span><i>{{paper.source}}</i></span>
                                <span>.&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Anchor, AnchorLink} from 'iview';

    export default {
        name: "publication",
        components: {
            Anchor,
            AnchorLink,
        },
        props: ["isMobile"],
        data() {
            return {
                publications: [{
                    year: 2019,
                    papers: [{
                        source: "Ubicomp'19, London, UK, 2019",
                        title: "MAC: Measuring the Impacts of Anomalies on Travel Time of Multiple Transportation Systems",
                        author: ["Zhihan Fang", "Yu Yang", "Shuai Wang", "Boyang Fu", "Zixing Song", "Fan Zhang", "Desheng Zhang"],
                    },{
                        source: "WWW'19, San Francisco, USA, 2019",
                        title: "Towards Efficient Sharing: A Usage Balancing Mechanism for Bike Sharing Systems",
                        author: ["Shuai Wang", "Tian He", "D. Zhang", "Y. Liu", "S. Son"],
                    },{
                        source: "IEEE Transactions on Mobile Computing (TMC), 2019",
                        title: "Networking Support For Bidirectional Cross-Technology Communication",
                        author: ["Shuai Wang", "Z. Yin", "S. Wang", "Y. Chen", "Z. Li", "S. Kim",  "Tian He"],
                    }]
                },{
                    year: 2018,
                    papers: [{
                        source: "ICNP'18, Cambridge, UK, 2018",
                        title: " Networking Support For Physical-Layer Cross-Technology Communication",
                        author: ["Shuai Wang", "Z. Yin", "Z. Li", "Tian He"]
                    },{
                        source: "Ubicomp'18, Singapore, 2018",
                        title: "BRAVO: Improving the Rebalancing Operation in Bike Sharing with Rebalancing Range Prediction",
                        author: ["Shuai Wang", "Tian He", "D. Zhang", "Y. Shu", "Y. Liu", "Y. Gu", "C. Liu", "H. Lee", "S. Son"]
                    },{
                        source: "IEEE Transactions on Communications (TCOM), 2018",
                        title: "Concurrent Transmission Aware Routing in Wireless Networks",
                        author: ["Shuai Wang", "S. Kim", "L. Kong", "Tian He"]
                    }],
                },
                {
                    year:2017,
                    papers:[{
                        source: "Wireless Power Transfer Algorithms and Applications in Ad hoc Communication Networks, Springer Inc,2017",
                        title: "Radiation Constrained Charging Utility Optimization for Human Safety",
                        author: ["Haipeng Dai", "Guihai Chen", "Yunhuai Liu", "Tian He"]
                    },
                    {
                        source: "INFOCOM 2017",
                        title: "C-Morse: Cross-Technology Communication with Transparent Morse Coding",
                        author: ["Tian He", "Zhimeng Yin", "Wenchao Jiang", "Song Min Kim"]
                    },
                    {
                        source: "ICDCS 2017",
                        title: "Task-aware TCP in Data Center Networks",
                        author: ["Tian He", "Jiawei Huang", "Jianxin Wang", "Tian He"]
                    },
                    {
                        source: "ICDCS 2017",
                        title: "Flow-Aware Adaptive Pacing to Mitigate TCP Incast in Data center Networks",
                        author: ["Shaojun Zou", "Jiawei Huang", "Zhimeng Yin", "Jianxin Wang"]
                    },

                    {
                        source: "IOTDI 2017",
                        title: "ATHOME: Automatic Tunable Wireless Charging for Smart Home",
                        author: ["Zheng Dong", "Yu Gu", "Lingkun Fu", "Jiming Chen","Tian He","Cong Liu"]
                    },
                    {
                        source: "2017 ACM/IEEE 8th International Conference on Cyber-Physical Systems",
                        title: "Battery State-of-Health Estimation for Mobile Devices",
                        author: ["Liang He", "Eugene Kim", "Kang Shin", "Guozhu Meng","Tian He"]
                    }
                    ]
                },
                {
                    year:2016,
                    papers:[{
                        source: "IEEE Transactions on Wireless Communications, 2016",
                        title: " A Unified Metric for Correlated Diversity in Wireless Networks",
                        author: ["S. Wang", "S. M. Kim", " G. Tan", "Y. Liu","T. He"]
                    },
                    {
                        source: "ACM Transactions on Cyber-Physical Systems, 2016",
                        title: "Last-Mile Transit Service with Urban Infrastructure Data",
                        author: ["Desheng Zhang", "Juanjuan Zhao", "Fan Zhang", "Ruobing Jiang","Tian He","Papanikolopouls Nikos"]
                    },
                    {
                        source: "ACM Transactions on Sensor Networks,2016",
                        title: "ATPC: Adaptive Transmission Power Control for Wireless Sensor Networks",
                        author: ["Fei Miao", "Jingbin Zhang", "Gang Zhou", "Lin Gu","Tian He","John A. Stankovic","Sang Son","George J. Pappas"]
                    }
                    ]
                },
                {
                    year:2015,
                    papers:[{
                        source: "ICNP'18, Cambridge, UK, 2018",
                        title: " Networking Support For Physical-Layer Cross-Technology Communication",
                        author: ["Desheng Zhang", "Juanjuan Zhao", "Fan Zhang", "Tian He","Papanikolopouls Nikos"]
                    }]
                },
                ],
                labPeople: ["Shuai Wang", "Tian He", "S. Wang", "T. He"]

            }
        },
        methods: {
            isLab: function(name) {
                for (let i=0;i<this.labPeople.length;i++) {
                    if (this.labPeople[i] == name) return true;
                }
                return false;
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    .publications{
        padding-left: 10%;
        padding-right: 10%;
        .introduction {
            margin-top: 0.1rem;
            .title {
                padding: 0.2rem ;
                font-size: 0.6rem;
                background-color: rgb(81, 47, 242);
                color: white;
            }
        }
        .publication-papers{
            margin-top: 1rem;
            background-color: rgb(173, 198, 247);
            text-align: left;
            padding: 0.5rem 0.6rem;
            .goodShow{
                .year-box{
                    display: flex;
                    flex-wrap: wrap;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    .year{
                        display: inline-block;
                        font-size: 0.3rem;
                        width: 1rem;
                    }
                }
                .my-time-line{
                    /*margin-top: 1rem;*/
                    padding-left: 1rem;
                    padding-right: 1rem;
                    .time-title{
                        margin-top: 0.5rem;
                        font-size: 0.4rem;
                        font-weight: bold;
                    }
                    .paper-box{
                        margin-top: 0.3rem;
                        margin-left: 0.5rem;
                        .per-paper{
                            font-size: 0.3rem;
                            margin-top: 0.1rem;
                        }
                    }
                }
            }
        }
    }
</style>