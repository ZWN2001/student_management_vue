import { post } from '@/utils/request';

export const login = query => {
    console.log("this.query:",query);
    return post("/user/login",query);
};
export const change_password = query => {
    console.log("this.query:",query);
    return post("/user/changePassword",query);
};
export const reset_password = query => {
    console.log("this.query:",query);
    return post("/user/resetPassword",query);
};
export const fetch_student = query => {
    console.log("this.query:",query);
    return post("/studentInfo/searchInfo",query);
};
export const update_student_info = data => {
    console.log(data);
    return post("/studentInfo/updateInfo",data);
};
export const fetch_grade  = data => {
    console.log(data);
    return post("/ClassGradeInfo/search",data);
};
export const update_grade  = data => {
    console.log(data);
    return post("/ClassGradeInfo/insert",data);
};
export const fetch_teacher_by_id = query=>{
    return post("/teacher/getTeacherById",query);
}

export const fetch_course = query=>{
    console.log(query);
    return post("/getCourse",query);
}

export const drop_course = query=>{
    console.log(query);
    return post("/dropCourse",query);
}
export const add_course = query=>{
    console.log(query);
    return post("/addCourse",query);
}
export const update_course = query=>{
    console.log(query);
    return post("/updateCourse",query);
}
export const fetch_stu_name = data=>{
    console.log(data);
    return post("/studentInfo/getStudentNameBySid",data);
}
export const select_course = data=>{
    console.log(data);
    return post("/selectCourse",data);
}
export const get_selected_course = data=>{
    console.log(data);
    return post("/getSelectedCourse",data);
}

export const get_all_selected_course = query=>{
    console.log(query);
    return post("/getAllSelectedCourse",query);
}
export const drop_selected_course = data=>{
    console.log(data);
    return post("/dropSelectedCourse",data);
}
