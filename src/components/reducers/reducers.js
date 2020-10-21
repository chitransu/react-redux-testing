import {combineReducers} from 'redux';
import saveComment from './saveComment';
import addComment from './addComment';

export default combineReducers({comments: saveComment,comment: addComment});