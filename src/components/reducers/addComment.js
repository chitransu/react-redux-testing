import {ADD_COMMENT,CLEAR_COMMENT} from '../actions/types';

const initialState = {
    text: ''
}
export default (state=initialState,action) => {
    switch(action.type){
        case ADD_COMMENT:
            return {...state,text: action.payload};
        case CLEAR_COMMENT:
            return {...state,text: ''}
        default:
            return state;
    }     
}