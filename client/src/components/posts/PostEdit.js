import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchPost, editPost } from"../../actions";
import PostForm from "./PostForm";
import Header from "../Header";


class PostEdit extends React.Component {

    componentDidMount() {

  this.props.fetchPost(this.props.match.params.id);

    }

    onSubmit = (myFieldValues) => {
        console.log(myFieldValues);
        this.props.editPost(this.props.match.params.id, myFieldValues);

    }


    render() {       

         if (!this.props.post) {
            return <div>...loading</div>;
        }
// specifiy stream as props to pass as initial values
// because stream contain all fields inside (here are title and desciption)
// as defined before in the initial values
        return (
       <div>

         < Header />

        <h3>Edit Post</h3>

      <PostForm 
      initialValues ={_.pick(this.props.post, "title", "categories", "content")}
      onSubmit = {this.onSubmit} />
       </div>
        );
        
          
          }

    }

         
    

const mapStateToProps = (state, myTarget) => {
  //  console.log("myTarget" , myTarget);
return { post: state.posts[myTarget.match.params.id] };

};



export default connect(mapStateToProps, {fetchPost, editPost})(PostEdit);