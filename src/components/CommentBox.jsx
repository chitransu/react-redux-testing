import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addComment,saveComment,clearComment} from './actions/actions';

class CommentBox extends Component{

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveComment(this.props.comment);
        this.props.onClearComment();
    }


    render(){
        return(
            <div>
                <h4>Add a comment</h4>
                <form onSubmit={this.handleSubmit}>
                    <textarea name = "text" value={this.props.comment} onChange={this.props.onAddComment}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comment: state.comment.text,
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        onAddComment: (event) => dispatch (addComment(event.target.value)),
        onSaveComment: (comment) => dispatch(saveComment(comment)),
        onClearComment: () => (dispatch(clearComment()))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentBox);