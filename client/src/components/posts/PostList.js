import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { fetchPosts } from "../../actions";



class PostList extends React.Component {
    // inside componentDidMount method we are calling
    // fetchStreams() action creator
    componentDidMount() {
      this.props.fetchPosts();
    }

// below this.props.currentUserId is from state.store variable as props
// from mapStateToProps
renderAdmin(post) {

  return (
<div className="right floated content">
<Link to= {`/posts/edit/${post.id}`} className="ui primary button">Edit</Link>

<Link to= {`/posts/delete/${post.id}`} className="ui negative button">Delete</Link>


<Link to= {`/posts/${post.id}`} className="ui primary button">PostShow</Link>
  </div>
  );
 } 


// below having converted state's object to an array
// then use map() to iterate rendering each stream.
// This means map() can only work on array not on object

renderList() {  
      return this.props.posts.map(post => {              
       return (         
     <div className="item"  key = {post.id}>      
         {this.renderAdmin(post)}   
       <i className="blue large middle aligned icon camera" />
         <div className="content" >         
         <Link to = {`/posts/${post.id}`} className="header" >{post.title}</Link>
               <div className="categories">{post.categories}</div> 
               <div className="content">{post.content}</div> 
           </div>    
     </div>
          );
      });
    }
  

    renderCreate() {    
        return (      
       <div style={{textAlign: "right"}}>
      <Link to ="/posts/new" className ="ui primary button">
        Create Post
        </Link>
        </div>
        );
      }      
      


      render() {
       
        console.log(this.props.posts);
        
        return (
        <div>
       <h2> Posts </h2>
       <div className="ui celled list">
        {this.renderList()}
        </div>        
       {this.renderCreate()}        
       </div>
       
               );
        }
      }

// test on output streams after state object to array conversion
   
    

const mapStateToProps = state => {
    // Object.values is js function to turn all the object's values
    // into an array
    // currentUserId : state.oAuth.userId
    // interpreted as currentUserId is coming from state.oAuth.userId

   return {posts : Object.values(state.posts) };
};


export default connect(mapStateToProps, {fetchPosts}) (PostList);
