import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/icon.css';
import 'babel-polyfill';

Vue.config.productionTip = false;
Vue.use(ElementUI, {
    size: 'small'
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin !=='0' && to.path !== '/login') {
        next('/login');
    }else if (localStorage.getItem("identity") === '0'){//学生
        if (to.path ==='/TeaDashboard'||to.path ==='/TeaClassMarkInfo'||to.path ==='/TeaCourseInfo'||to.path ==='/TeaCourseManage'){
            next('/403');
        }else {
            next();
        }
    }else if (localStorage.getItem("identity") === '1'){
        if (to.path ==='/StuDashboard'||to.path ==='/ClassMarkInfo'||to.path ==='/ClassInfo'||to.path ==='/StuCourseManage'||to.path ==='/stuCourseTable'){
            next('/403');
        }else {
            next();
        }
    }   else {
       next();
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
