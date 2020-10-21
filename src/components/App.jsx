import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
    return(
        <div>
            <h2>React - Redux Example</h2>
            <CommentBox />
            <CommentList />
        </div>
    )
}