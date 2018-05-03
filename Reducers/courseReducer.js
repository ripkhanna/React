import * as ActionTypes from './../Actions/actionTypes';
export default function courseReducer(state = [],action) {
switch(action.type) {
    case ActionTypes.CREATE_COURSE:
    return [...state,
        Object.assign({},action.course)
    ];
    case ActionTypes.LOAD_COURSES_SUCCESS:
    return action.courses;

    default:
    return state;

}
}