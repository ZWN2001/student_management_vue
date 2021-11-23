<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;    <div>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-table&ndash;&gt;-->
<!--&lt;!&ndash;            :data="timeData"&ndash;&gt;-->
<!--&lt;!&ndash;            stripe&ndash;&gt;-->
<!--&lt;!&ndash;            style="width: 100%">&ndash;&gt;-->
<!--&lt;!&ndash;            <el-table-column width="80" label="周" fixed="left" prop="label" align="center"></el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                width="118"&ndash;&gt;-->
<!--&lt;!&ndash;                v-for="(v,i) in tableData" :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                v-if="v.courseDay==='1'" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot="header" slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="tabletitle-timeline">周一</div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div >&ndash;&gt;-->
<!--&lt;!&ndash;                        <div >&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                            {{scope.row[i]}}<br/>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                            {{scope.row[i]}}&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                width="118"&ndash;&gt;-->
<!--&lt;!&ndash;                v-for="(v,i) in tableData" :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                v-if="v.courseDay==='2'" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot="header" slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="tabletitle-timeline">周二</div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div >&ndash;&gt;-->
<!--&lt;!&ndash;                        <div >&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[sbjectKey[i]]}}<br/>&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[teacherKey[i]]}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                width="118"&ndash;&gt;-->
<!--&lt;!&ndash;                v-for="(v,i) in tableData" :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                v-if="v.courseDay==='3'" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot="header" slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="tabletitle-timeline">周三</div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div>&ndash;&gt;-->
<!--&lt;!&ndash;                        <div>&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[sbjectKey[i]]}}<br/>&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[teacherKey[i]]}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                width="118"&ndash;&gt;-->
<!--&lt;!&ndash;                v-for="(v,i) in tableData" :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                v-if="v.courseDay==='4'" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot="header" slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="tabletitle-timeline">周一</div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div >&ndash;&gt;-->
<!--&lt;!&ndash;                        <div >&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[sbjectKey[i]]}}<br/>&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[teacherKey[i]]}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                width="118"&ndash;&gt;-->
<!--&lt;!&ndash;                v-for="(v,i) in tableData" :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                v-if="v.courseDay==='5'" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot="header" slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="tabletitle-timeline">周一</div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div >&ndash;&gt;-->
<!--&lt;!&ndash;                        <div >&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[sbjectKey[i]]}}<br/>&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[teacherKey[i]]}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                width="118"&ndash;&gt;-->
<!--&lt;!&ndash;                v-for="(v,i) in tableData" :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                v-if="v.courseDay==='6'" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot="header" slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="tabletitle-timeline">周一</div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div >&ndash;&gt;-->
<!--&lt;!&ndash;                        <div >&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[sbjectKey[i]]}}<br/>&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[teacherKey[i]]}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                width="118"&ndash;&gt;-->
<!--&lt;!&ndash;                v-for="(v,i) in tableData" :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                v-if="v.courseDay==='7'" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot="header" slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="tabletitle-timeline">周一</div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;                <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div >&ndash;&gt;-->
<!--&lt;!&ndash;                        <div >&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[sbjectKey[i]]}}<br/>&ndash;&gt;-->
<!--&lt;!&ndash;                            {{scope.row[teacherKey[i]]}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;        </el-table>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->


<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import {get_all_selected_course } from '@/api';&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;    name: 'stuCourseTable',&ndash;&gt;-->
<!--&lt;!&ndash;    data() {&ndash;&gt;-->
<!--&lt;!&ndash;        return {&ndash;&gt;-->
<!--&lt;!&ndash;            query: {&ndash;&gt;-->
<!--&lt;!&ndash;                cid: '',&ndash;&gt;-->
<!--&lt;!&ndash;                sid: localStorage.getItem('sid'),&ndash;&gt;-->
<!--&lt;!&ndash;                cname: '',&ndash;&gt;-->
<!--&lt;!&ndash;                credit:'',&ndash;&gt;-->
<!--&lt;!&ndash;                teacherName:'',&ndash;&gt;-->
<!--&lt;!&ndash;                courseDay:'',&ndash;&gt;-->
<!--&lt;!&ndash;                courseSection:'',&ndash;&gt;-->
<!--&lt;!&ndash;                pageIndex: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                pageSize: 10&ndash;&gt;-->
<!--&lt;!&ndash;            },&ndash;&gt;-->
<!--&lt;!&ndash;            editVisible:false,&ndash;&gt;-->
<!--&lt;!&ndash;            tableData: [],&ndash;&gt;-->
<!--&lt;!&ndash;            pageTotal: 0,&ndash;&gt;-->
<!--&lt;!&ndash;            origin: {},&ndash;&gt;-->
<!--&lt;!&ndash;            idx: -1,&ndash;&gt;-->
<!--&lt;!&ndash;            id: -1&ndash;&gt;-->
<!--&lt;!&ndash;        };&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    created() {&ndash;&gt;-->
<!--&lt;!&ndash;        this.getData();&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    methods: {&ndash;&gt;-->
<!--&lt;!&ndash;        // 获取 easy-mock 的模拟数据&ndash;&gt;-->
<!--&lt;!&ndash;        getData() {&ndash;&gt;-->
<!--&lt;!&ndash;            get_all_selected_course(this.query).then(res => {&ndash;&gt;-->
<!--&lt;!&ndash;                console.log(res)&ndash;&gt;-->
<!--&lt;!&ndash;                this.tableData = res.data.data;&ndash;&gt;-->
<!--&lt;!&ndash;            });&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;};&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->
<!--&lt;!&ndash;.tabletitle-timeline{&ndash;&gt;-->
<!--&lt;!&ndash;    line-height: 18px!important;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->






<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class='wrap'>&ndash;&gt;-->
<!--&lt;!&ndash;        <div>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-table&ndash;&gt;-->
<!--&lt;!&ndash;                :data="sections"&ndash;&gt;-->
<!--&lt;!&ndash;                style="width: 100%">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                    width="80"&ndash;&gt;-->
<!--&lt;!&ndash;                    prop="id"&ndash;&gt;-->
<!--&lt;!&ndash;                    label='节次'&ndash;&gt;-->
<!--&lt;!&ndash;                    align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->


<!--&lt;!&ndash;        <el-table&ndash;&gt;-->
<!--&lt;!&ndash;            :data="tableData"&ndash;&gt;-->
<!--&lt;!&ndash;            style="width: 100%"&ndash;&gt;-->
<!--&lt;!&ndash;        >&ndash;&gt;-->
<!--&lt;!&ndash;                <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;                    class='title'&ndash;&gt;-->
<!--&lt;!&ndash;                    width="118"&ndash;&gt;-->
<!--&lt;!&ndash;                    v-for="(v,i) in weeks" :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                    align="center">&ndash;&gt;-->
<!--&lt;!&ndash;                    <template slot="header" slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="tabletitle-timeline">&ndash;&gt;-->
<!--&lt;!&ndash;                          {{v.id}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </template>&ndash;&gt;-->
<!--&lt;!&ndash;                    <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                        <div >&ndash;&gt;-->
<!--&lt;!&ndash;                                {{scope.row[sbjectKey[i]]}}<br/>&ndash;&gt;-->
<!--&lt;!&ndash;                                {{scope.row[teacherKey[i]]}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </template>&ndash;&gt;-->
<!--&lt;!&ndash;                </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;        </el-table>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->

<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;    data() {&ndash;&gt;-->
<!--&lt;!&ndash;        return {&ndash;&gt;-->

<!--&lt;!&ndash;            sections:[&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:1&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:2&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:3&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:4&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:5&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->

<!--&lt;!&ndash;            ],&ndash;&gt;-->
<!--&lt;!&ndash;            weeks:[&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:'星期一'&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:'星期二'&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:'星期三'&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:'星期四'&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:'星期五'&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:'星期六'&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                    id:'星期日'&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;            ],&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--<template>-->
<!--    <div class='wrap'>-->
<!--        &lt;!&ndash;表格&ndash;&gt;-->
<!--        <el-table-->
<!--            :data="timeData"-->
<!--            stripe-->
<!--            style="width: 100%">-->
<!--            <el-table-column width="80" label="周" fixed="left" prop="label" align="center"></el-table-column>-->

<!--            <el-table-column label="上午" align="center">-->
<!--                <el-table-column-->
<!--                    width="118"-->
<!--                    v-for="(v,i) in titleData" :key="i"-->
<!--                    v-if="v.label==='上午'" align="center">-->
<!--                    <template slot="header" slot-scope="scope">-->
<!--                        <div class="tabletitle-timeline">-->
<!--                            第{{v.count}}节 <br/>-->
<!--                            {{v.startTime}}-{{v.endTime}}-->
<!--                        </div>-->
<!--                    </template>-->
<!--                    <template slot-scope="scope">-->
<!--                        <div >-->
<!--                            <div v-if="timeShow">-->
<!--                                {{scope.row[subjectKey[i]]}}<br/>-->
<!--                                {{scope.row[teacherKey[i]]}}-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </template>-->
<!--                </el-table-column>-->
<!--            </el-table-column>-->

<!--            <el-table-column label="下午" align="center">-->
<!--                <el-table-column-->
<!--                    width="118"-->
<!--                    v-for="(v,i) in titleData" :key="i"-->
<!--                    v-if="v.label==='下午'" align="center">-->
<!--                    <template slot="header" slot-scope="scope">-->
<!--                        <div class="tabletitle-timeline">-->
<!--                            第{{v.count}}节 <br/>-->
<!--                            {{v.startTime}}-{{v.endTime}}-->
<!--                        </div>-->
<!--                    </template>-->
<!--                    <template slot-scope="scope">-->
<!--                        <div >-->
<!--                            <div v-if="timeShow">-->
<!--                                {{scope.row[subjectKey[i]]}}<br/>-->
<!--                                {{scope.row[teacherKey[i]]}}-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </template>-->
<!--                </el-table-column>-->
<!--            </el-table-column>-->

<!--            <el-table-column label="晚上" align="center">-->
<!--                <el-table-column-->
<!--                    width="118"-->
<!--                    v-for="(v,i) in titleData" :key="i"-->
<!--                    v-if="v.label==='晚上'"-->
<!--                    align="center">-->
<!--                    <template slot="header" slot-scope="scope">-->
<!--                        <div class="tabletitle-timeline">-->
<!--                            第{{v.count}}节 <br/>-->
<!--                            {{v.startTime}}-{{v.endTime}}-->
<!--                        </div>-->
<!--                    </template>-->
<!--                    <template slot-scope="scope">-->
<!--                        <div >-->
<!--                            <div v-if="timeShow">-->
<!--                                {{scope.row[subjectKey[i]]}}<br/>-->
<!--                                {{scope.row[teacherKey[i]]}}-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </template>-->
<!--                </el-table-column>-->
<!--            </el-table-column>-->
<!--        </el-table>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--    data() {-->
<!--        return {-->
<!--            pageButton:{},//权限按钮-->
<!--            //查询-->
<!--            gradeUnitData:[],//年级班级数据-->
<!--            defaultProps: {value:'id'},//默认节点名与数据绑定-->
<!--            positionArr:[],//级联选择值-->

<!--            timeShow:true,//编辑表与展示表-->
<!--            teachers:[],//全部教师-->

<!--            subjectKey:['oneS','twoS','threeS','fourS','fiveS','sixS','sevenS','eightS','nineS'],//科目key值-->
<!--            teacherKey:['oneT','twoT','threeT','fourT','fiveT','sixT','sevenT','eightT','nineT'],//老师key值-->
<!--            //每天的课表-->
<!--            timeData:[-->
<!--                {-->
<!--                    id:'1',-->
<!--                    label:'周一',-->
<!--                    oneS:'java教程1',-->
<!--                    oneT:'郑老师',-->
<!--                    twoS:'语文',-->
<!--                    twoT:'张老师',-->

<!--                    fourS:'音乐',-->
<!--                    fourT:'巩老师',-->
<!--                    fiveS:'网络',-->
<!--                    fiveT:'征老师',-->
<!--                    sixS:'舞蹈',-->
<!--                    sixT:'程老师',-->

<!--                    nineS:'就业指导',-->
<!--                    nineT:'曹老师'-->
<!--                },-->
<!--                {-->
<!--                    id:'2',-->
<!--                    label:'周二',-->
<!--                    oneS:'java教程2',-->
<!--                    oneT:'郑老师',-->
<!--                    twoS:'语文',-->
<!--                    twoT:'张老师',-->
<!--                    threeS:'心理辅导',-->
<!--                    threeT:'杨老师',-->
<!--                    fourS:'音乐',-->
<!--                    fourT:'巩老师',-->
<!--                    fiveS:'网络',-->
<!--                    fiveT:'征老师',-->
<!--                    sixS:'舞蹈',-->
<!--                    sixT:'程老师',-->
<!--                    sevenS:'ppt教程',-->
<!--                    sevenT:'翟老师',-->
<!--                    eightS:'职业规划',-->
<!--                    eightT:'郝老师',-->
<!--                    nineS:'就业指导',-->
<!--                    nineT:'曹老师'-->
<!--                },-->
<!--                {-->
<!--                    id:'3',-->
<!--                    label:'周三',-->
<!--                    oneS:'java教程3',-->
<!--                    oneT:'郑老师',-->
<!--                    twoS:'语文',-->
<!--                    twoT:'张老师',-->
<!--                    threeS:'心理辅导',-->
<!--                    threeT:'杨老师',-->
<!--                    fourS:'音乐',-->
<!--                    fourT:'巩老师',-->
<!--                    fiveS:'网络',-->
<!--                    fiveT:'征老师',-->
<!--                    sixS:'舞蹈',-->
<!--                    sixT:'程老师',-->
<!--                    sevenS:'ppt教程',-->
<!--                    sevenT:'翟老师',-->
<!--                    eightS:'职业规划',-->
<!--                    eightT:'郝老师',-->
<!--                    nineS:'就业指导',-->
<!--                    nineT:'曹老师'-->
<!--                },-->
<!--                {-->
<!--                    id:'4',-->
<!--                    label:'周四',-->
<!--                    oneS:'java教程',-->
<!--                    oneT:'郑老师',-->
<!--                    twoS:'语文',-->
<!--                    twoT:'张老师',-->
<!--                    threeS:'心理辅导',-->
<!--                    threeT:'杨老师',-->
<!--                    fourS:'音乐',-->
<!--                    fourT:'巩老师',-->
<!--                    fiveS:'网络',-->
<!--                    fiveT:'征老师',-->
<!--                    sixS:'舞蹈',-->
<!--                    sixT:'程老师',-->
<!--                    sevenS:'ppt教程',-->
<!--                    sevenT:'翟老师',-->
<!--                    eightS:'职业规划',-->
<!--                    eightT:'郝老师',-->
<!--                    nineS:'就业指导',-->
<!--                    nineT:'曹老师'-->
<!--                },-->
<!--                {-->
<!--                    id:'5',-->
<!--                    label:'周五',-->
<!--                    oneS:'java教程',-->
<!--                    oneT:'郑老师',-->
<!--                    twoS:'语文',-->
<!--                    twoT:'张老师',-->
<!--                    threeS:'心理辅导',-->
<!--                    threeT:'杨老师',-->
<!--                    fourS:'音乐',-->
<!--                    fourT:'巩老师',-->
<!--                    fiveS:'网络',-->
<!--                    fiveT:'征老师',-->
<!--                    sixS:'舞蹈',-->
<!--                    sixT:'程老师',-->
<!--                    sevenS:'ppt教程',-->
<!--                    sevenT:'翟老师',-->
<!--                    eightS:'职业规划',-->
<!--                    eightT:'郝老师',-->
<!--                    nineS:'就业指导',-->
<!--                    nineT:'曹老师'-->
<!--                },-->
<!--                {-->
<!--                    id:'',-->
<!--                    label:'周六',-->
<!--                },-->
<!--                {-->
<!--                    id:'',-->
<!--                    label:'周天',-->
<!--                },-->
<!--            ],-->
<!--            tableData:[-->
<!--                {-->
<!--                    cid:'2',-->
<!--                    cname:'122',-->
<!--                    teacherName:'t1',-->
<!--                    credit:'1',-->
<!--                    courseDay:'2',-->
<!--                    courseSection:'3'-->
<!--                },-->
<!--                {-->
<!--                    cid:'3',-->
<!--                    cname:'123',-->
<!--                    teacherName:'t2',-->
<!--                    credit:'1',-->
<!--                    courseDay:'3',-->
<!--                    courseSection:'3'-->
<!--                },-->
<!--                {-->
<!--                    cid:'4',-->
<!--                    cname:'124',-->
<!--                    teacherName:'t3',-->
<!--                    credit:'1',-->
<!--                    courseDay:'4',-->
<!--                    courseSection:'4'-->
<!--                },-->
<!--                {-->
<!--                    cid:'5',-->
<!--                    cname:'125',-->
<!--                    teacherName:'t4',-->
<!--                    credit:'1',-->
<!--                    courseDay:'5',-->
<!--                    courseSection:'2'-->
<!--                },-->
<!--            ],-->
<!--            belongName:'',//班级名-->
<!--            belongId:"",//班级id-->
<!--            belongType:"803",//803表示班级，教室804-->
<!--            timeId:"",-->
<!--            //课节数据-&#45;&#45;标题-->
<!--            titleData:[-->
<!--                {-->
<!--                    id:'1',-->
<!--                    count:1,-->
<!--                    label:'上午',-->
<!--                    startTime:'08:00',-->
<!--                    endTime:'08:30'-->
<!--                },-->
<!--                {-->
<!--                    id:'2',-->
<!--                    count:2,-->
<!--                    label:'上午',-->
<!--                    startTime:'09:00',-->
<!--                    endTime:'09:30'-->
<!--                },-->
<!--                {-->
<!--                    id:'3',-->
<!--                    count:3,-->
<!--                    label:'下午',-->
<!--                    startTime:'12:05',-->
<!--                    endTime:'12:35'-->
<!--                },-->
<!--                {-->
<!--                    id:'4',-->
<!--                    count:4,-->
<!--                    label:'下午',-->
<!--                    startTime:'14:00',-->
<!--                    endTime:'14:30'-->
<!--                },-->

<!--                {-->
<!--                    id:'7',-->
<!--                    count:7,-->
<!--                    label:'晚上',-->
<!--                    startTime:'19:00',-->
<!--                    endTime:'19:30'-->
<!--                },-->

<!--            ],-->
<!--        }-->
<!--    },-->
<!--}-->
<!--</script>-->
<!--<style>-->
<!--.tabletitle-timeline{-->
<!--    line-height: 18px!important;-->
<!--}-->
<!--.wrap{-->
<!--    display: flow;-->
<!--    justify-content: center;-->
<!--}-->
<!--</style>-->



