/* eslint-disable */
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
                    <div v-for="(item, ii) in publications" :key="item.year" :id="item.year">
                        <div class="time-title">{{item.year}}</div>
                        <div class="paper-box">
                            <div v-for="(paper, index) in item.papers" :key="index" class="per-paper">
                                <div style="width: 100%" class="box">
                                    <div style="display: inline-block;text-align: right" :style="isMobile? 'width: 10%;': 'width: 5%'"><strong>{{index+pub_index[ii]}}.&nbsp;&nbsp;</strong></div>
                                    <div style="display: inline-block;" :style="isMobile? 'width: 90%;': 'width: 95%'">
                                    <span v-for="(a, ai) in paper.author" :key="ai">
                                        <div :style="isLab(a) & ai==0? 'text-decoration: underline;': ''" style="display: inline-block">
                                            {{a}}
                                        </div>
                                        <span v-if="ai < paper.author.length-2">,&nbsp;</span>
                                        <span v-else-if="ai == paper.author.length-2">&nbsp;and&nbsp;</span>
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
                pub_index: [],
                publications: [{
                    year: 2021,
                    papers: [{
                        source: "UbiComp, 2021",
                        title: " Understanding User Behavior in Car Sharing Services Through The Lens of Mobility: Mixing Qualitative and Quantitative Studies",
                        author: ["Guang Wang", "Harsh Rajkumar Vaish", "Huijun Sun", "Jianjun Wu", "Shuai Wang", "Desheng Zhang"],
                    }]
                },{
                    year: 2020,
                    papers: [{
                        source: "ACM Transactions on Intelligent Systems and Technology (TIST), 2020.",
                        title: " Pricing-aware Real-time Charging Scheduling and Charging Station Expansion for Large-scale Electric Buses",
                        author: ["Guang Wang", "Zhihan Fang", "Xiaoyang Xie", "Shuai Wang", "Huijun Sun", "Fan Zhang", "Yunhuai Liu", "Desheng Zhang"],
                    },{
                        source: "ICDE, Dallas, Texas, USA, 2020.",
                        title: " Data-Driven Fairness-Aware Vehicle Displacement for Large-Scale Electric Taxi Fleets",
                        author: ["Guang Wang", "Shuxin Zhong", "Shuai Wang", "Fei Miao", "Zheng Dong", "Desheng Zhang"],
                    },{
                        source: "ICNP, Madrid, Spain, 2020",
                        title: " SCLoRa: Leveraging Multi-Dimesionality in Decoding Collided LoRa Transmissions",
                        author: ["Bin Hu", "Zhimeng Yin", "Shuai Wang", "Sh. Wang", "Zhuqing Xu", "Tian He"],
                    },{
                        source: "UbiComp-ISWC, Cancún, México, 2020",
                        title: "SParking: A Win-Win Data-Driven Contract Parking Sharing System",
                        author: ["Xin Zhu", "Shuai Wang", "Baoshen Guo", "Taiwei Ling", "Ziyi Zhou", "Lai Tu", "Tian He"],
                    },{
                        source: "WWW, TaiPei, China, 2020",
                        title: "CellRep: Usage Representativeness Modeling and Correction Based on Multiple City-Scale Cellular Networks",
                        author: ["Zhihan Fang", "Guang Wang", "Shuai Wang", "Chaoji Zuo", "Fan Zhang", "Desheng Zhang"],
                    },{
                        source: "UbiComp, Cancún, México, 2020",
                        title: "CellPred: A Behavior-aided Scheme for Cellular Data Usage Prediction",
                        author: ["Zhou Qin", "Fang Cao", "Yu Yang", "Shuai Wang",
                            "Yunhuai Liu", "Chang Tan", "Desheng Zhang" ],
                    },{
                        source: "UbiComp, Cancún, México, 2020",
                        title: "Data-Driven Battery-Lifetime-Aware Scheduling for Electric Bus Fleets",
                        author: ["Songyuan Li", "Shibo He", "Shuai Wang", "Tian He", "Jiming Chen"],
                    },{
                        source: "UbiComp, Cancún, México, 2020",
                        title: "FairCharge: A Data-Driven Fairness-Aware Charging Recommendation System for Large-Scale Electric Taxi Fleets",
                        author: ["Guang Wang", "Yongfeng Zhang", "Zhihan Fang", "Shuai Wang", "Fan Zhang", "Desheng Zhang"],
                    },{
                        source: "IEEE/ACM Transactions on Networking (TON), 2020",
                        title: "Reliable Physical-Layer Cross-Technology Communication with Emulation Error Correction",
                        author: ["Yongrui Chen", "Shuai Wang", "Zhijun Li", "Tian He"],
                    }]
                },
                    {
                    year: 2019,
                    papers: [{
                        source: "IEEE Transactions on Intelligent Transportation Systems (TITS), 2019",
                        title: "ViFi-MobiScanner: Observe Human Mobility via Vehicular Internet Service",
                        author: ["Lai Tu", "Shuai Wang", "Desheng Zhang", "Fan Zhang", "Tian He"],
                    },{
                        source: "UbiComp'19, London, UK, 2019",
                        title: "MAC: Measuring the Impacts of Anomalies on Travel Time of Multiple Transportation Systems",
                        author: ["Zhihan Fang", "Yu Yang", "Shuai Wang", "Boyang Fu", "Zixing Song", "Fan Zhang", "Desheng Zhang"],
                    },{
                        source: "WWW'19, San Francisco, USA, 2019",
                        title: "Towards Efficient Sharing: A Usage Balancing Mechanism for Bike Sharing Systems",
                        author: ["Shuai Wang", "Tian He", "D. Zhang", "Y. Liu", "S. Son"],
                    },{
                        source: "IEEE Transactions on Mobile Computing (TMC), 2019",
                        title: "Networking Support For Bidirectional Cross-Technology Communication",
                        author: ["Shuai Wang", "Z. Yin", "Sh. Wang", "Y. Chen", "Z. Li", "S. Kim",  "Tian He"],
                    }]
                },{
                    year: 2018,
                    papers: [{
                        source: "ICNP'18, Cambridge, UK, 2018",
                        title: "Networking Support For Physical-Layer Cross-Technology Communication",
                        author: ["Shuai Wang", "Z. Yin", "Z. Li", "Tian He"]
                    },{
                        source: "IEEE Transactions on Communications, 2018",
                        title: "Concurrent Transmission Aware Routing in Wireless Networks",
                        author: ["Shuai Wang", "Song Min Kim", "Linghe Kong", "Tian He"]
                    },{
                        source: "UbiComp'18, Singapore, 2018",
                        title: "BRAVO: Improving the Rebalancing Operation in Bike Sharing with Rebalancing Range Prediction",
                        author: ["Shuai Wang", "Tian He", "D. Zhang", "Y. Shu", "Y. Liu", "Y. Gu", "C. Liu", "H. Lee", "S. Son"]
                    },{
                        source: "IEEE 38th International Conference on Distributed Computing Systems (ICDCS), 2018",
                        title: "Symbol-level cross-technology communication via payload encoding",
                        author: ["Shuai Wang", "S. Kim", "Tian He"]
                    }],
                },
                {
                    year:2017,
                    papers:[{
                        source: "2017 26th International Conference on Computer Communication and Networks (ICCCN),2017",
                        title: "Achieving spectrum efficient communication under cross-technology interference",
                        author: ["Shuai Wang", "Zhimeng Yin", "Song Min Kim", "Tian He"]
                    },
                    {
                        source: "IEEE/ACM Transactions on Sensor Networks (TOSN) 2017",
                        title: "Encode When Necessary: Correlated Network Coding under Unreliable Wireless Links",
                        author: ["Shuai Wang", "S. Kim", "Z. Yin", "Tian He"]
                    },
                    {
                        source: "IEEE/ACM Transactions on Networking (TON) 2017",
                        title: "Free Side-channel Cross-technology Communication in Wireless Networks",
                        author: ["S. Kim", "S. Ishida", "Shuai Wang", "Tian He"]
                    },
                    {
                        source: "IEEE/ACM Transactions on Networking (TON) 2017",
                        title: "Exploiting Spatiotemporal Correlation for Wireless Networks under Interference",
                        author: ["S. Kim", "Shuai Wang", "Tian He"]
                    },

                    {
                        source: "IEEE Transactions on Big Data (TBD) 2017",
                        title: "Data-Driven Digital Advertissing with Uncertain Demand Model in Metro Networks",
                        author: ["R. Jiang", "Z. Feng", "D. Zhang", "Shuai Wang", "Y. Zhu", "F. Zhang", "Tian He"]
                    }
                    ]
                },
                {
                    year:2016,
                    papers:[{
                        source: "IEEE Transactions on Wireless Communications, 2016",
                        title: " A Unified Metric for Correlated Diversity in Wireless Networks",
                        author: ["S. Wang", "A. Basalamah", "S. M. Kim", " G. Tan", "Y. Liu","T. He"]
                    },
                    {
                        source: "IEEE/ACM Transactions on Networking (TON), 2015",
                        title: "CorLayer: A Transparent Link Correlation Layer for Energy Efficient Broadcast",
                        author: ["Shuai Wang", "Song Min Kim", "Yunhuai Liu", "Guang Tan","Tian He"]
                    },
                    {
                        source: "RTCSA'16, Daegu, South Korea, 2016",
                        title: "IoT Networking: From Coexistence to Collaboration",
                        author: ["S. Kim", "Shuai Wang", "Tian He"]
                    }]
                },
                {
                    year:2015,
                    papers:[{
                        source: "IEEE/ACM Transactions on Networking (TON), 2015",
                        title: "CorLayer: A Transparent Link Correlation Layer for Energy Efficient Broadcast",
                        author: ["Shuai Wang", "Song Min Kim", "Yunhuai Liu", "Guang Tan","Tian He"]
                    },{
                        source: "IEEE Transactions on Wireless Communications, 2015",
                        title: "Delay-bounded transmission power control for low-duty-cycle sensor networks",
                        author: ["Zuzhi Fan", "Shi Bai", "Shuai Wang", "Tian He"]
                    },{
                        source: "IEEE International Conference on Big Data (Big Data), 2015",
                        title: "EveryoneCounts: Data-driven digital advertising with uncertain demand model in metro networks",
                        author: ["Desheng Zhang", "Riiobing Jiang", "Shuai Wang", "Yanmin Zhu", "Bo Yang", "Jian Cao", "Fan Zhang", "Tian He"]
                    },{
                        source: "Proceedings of the 13th ACM Conference on Embedded Networked Sensor Systems, 2015",
                        title: "cetx: Incorporating spatiotemporal correlation for better wireless networking",
                        author: ["Song Min Kim", "Shuai Wang", "Tian He"]
                    }]
                },
                ],
                labPeople: ["Shuai Wang", "S. Wang"]
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
            let ind = 1;
            // debugger;
            for (let it of this.publications){
                this.pub_index.push(ind);
                ind += it.papers.length;
            }
        },
    }
</script>

<style scoped lang="less">
    .publications{
        padding-left: 10%;
        padding-right: 10%;
        .box{
            display: -webkit-flex; /* Safari */
            display: flex;
            align-items: flex-start;
        }
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
                        font-size: 0.4rem;
                        width: 1.3rem;
                    }
                }
                .my-time-line{
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