import courseApi from '../../api/mockCourseApi';
import * as ActionTypes from './actionTypes';

export function createCourse(course) {
    return {type: ActionTypes.CREATE_COURSE ,course};
}

export function loadCoursesSuccess(courses) {
    return {type: ActionTypes.LOAD_COURSES_SUCCESS ,courses};
}

export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}