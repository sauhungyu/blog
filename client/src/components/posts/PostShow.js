import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions";
import Header from "../Header";



class PostShow extends React.Component {
 
// component first gets rendered 
    componentDidMount() {      
    const { id } = this.props.match.params;    
     
    this.props.fetchPost(id);
        
    }



 
 render() {

  //const { title, categories, content} = this.props.post;

  const { post } = this.props;
  



   if(!this.props.post) {
     return <div>Loading...</div>;
   }
     
// above code ensure first off it doesn't load stream 
// after awaiting it then load
// es2016 syntax to pull off title and description fromn
// this.props.stream.title and this.props.stream.description
// and shorten the syntax as below 


     return (
         
         <div>
         
         < Header />
         
         <h3>Post : {post.title}</h3>
       <p>Post categories :{post.categories}</p>
       <p>Post content :{post.content}</p>
       </div>
     );
         
}

};

const mapStateToProps = (state, myTarget) => {

   console.log("myTarget", myTarget);
    return {
       
      post: state.posts[myTarget.match.params.id]
    }     
    
    }


export default connect(mapStateToProps, {fetchPost})(PostShow);
