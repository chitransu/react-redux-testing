import {SAVE_COMMENT,ADD_COMMENT,CLEAR_COMMENT} from './types';

export const saveComment = (comment) => {
    return{
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const addComment = (comment) => {
    return{
        type: ADD_COMMENT,
        payload: comment
    }
}


export function clearComment() {
    return { 
      type: CLEAR_COMMENT
    }
  }