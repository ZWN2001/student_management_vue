import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '' },
            children: [
                {
                    path: '/StuDashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Stu/StuDashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/TeaDashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Tea/TeaDashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/ClassMarkInfo',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Stu/studentinfo/ClassMarkInfo.vue'),
                    meta: { title: '班级成绩信息'}
                },
                {
                    path: '/TeaClassMarkInfo',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Tea/TeaClassMarkInfo.vue'),
                    meta: { title: '班级成绩信息'}
                },
                {
                    path: '/ClassInfo',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Stu/studentinfo/CourseInfo.vue'),
                    meta: { title: '课程与选课' }
                },
                {
                    path: '/TeaCourseInfo',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Tea/TeaCourseInfo'),
                    meta: { title: '课程' }
                },
                {
                    path: '/TeaCourseManage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/TeaCourseManage.vue'),
                    meta: { title: '选课管理' }
                },
                {
                    path: '/StuCourseManage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Stu/StuCourseManage.vue'),
                    meta: { title: '选课管理' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: '消息'}
                },
                {
                    path: '/stuCourseTable',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Stu/stuCourseTable/CourseTable.vue'),
                    meta: { title: '我的课表'}
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },

            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
