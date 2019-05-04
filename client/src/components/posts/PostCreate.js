import React from "react";
import {connect} from "react-redux";
import {createPost} from "../../actions";
import PostForm from "./PostForm";
import Header from "../Header";


class PostCreate extends React.Component {
 
// on Submit will be passed down to StreamForm component as a props
// to get down to create a stream through StreamForm,
// and this onSubmit is calling action-creator to createStream
// with myFieldValues entered
onSubmit = (myFieldValues) => {
   this.props.createPost(myFieldValues);

};

render() {
    return (

       <div>

           < Header />
        <h3>Create Post</h3>

        <PostForm onSubmit = {this.onSubmit} />

    </div>


    )
};


   
}


export default connect(null, {createPost})(PostCreate);
