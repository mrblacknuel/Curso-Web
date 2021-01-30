import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" avatar={faker.image.image()} time="Today at 6PM" text="Nice blog post!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Tom" avatar={faker.image.image()} time="Today at 9PM" text="Great post dude" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" avatar={faker.image.image()} time="Yesterday at 10AM" text="Go reds" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));