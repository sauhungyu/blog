import blogs from "../apis/blogs";
import history from "../history";




// types is designed to let user avoid typo between action creator and reducer
// result in both not have identical strings to cause huge bugs in coding
import { 
    CREATE_POST, 
    FETCH_POSTS,
    FETCH_POST, 
    DELETE_POST, 
    EDIT_POST 
} from "./types";


const API_KEY = "?key=children123"

// ** all action creators below following api restful convention **


// create action-creator involving all the form elements as argument
// with network access over api server using axios calling streams, see apis>streams
// waiting for response(with data we are interested only from entire object) from api server
// function that redux thunk allow us to two argement(dispatch, getState)
// dispatch is to dispatch action to reducer, getState() allowed to pullout
// state store's info such as oAuth's userId, so below refactor to 2 args
// and destruct out userId from state's oAuth

export const createPost = (myFieldValues) => async (dispatch) => {
  // also add in all ...formValues with userId when creating a stream as well
 // inspect this change in redux dev-tool > state
    const response = await blogs.post(`/posts${API_KEY}`, {...myFieldValues} );

// dispatch action with type and payload to reducer
dispatch({type: CREATE_POST, payload: response.data});
//do some programmatic navigation after creating a stream
// to get user back to the root router
// now history is custom route object we can add generic route to it as a props "/" 
// by push()
history.push('/');

};


export const fetchPosts = () => async dispatch => {
    const response = await blogs.get(`/posts${API_KEY}`);
    
    // dispatch action with type and payload to reducer
    dispatch({type: FETCH_POSTS, payload: response.data});
    };
    
    export const fetchPost = (id) => async dispatch => {
        const response = await blogs.get(`/posts/${id}`);
        
        // dispatch action with type and payload to reducer
        dispatch({type: FETCH_POST, payload: response.data});
        };

     // **update include input values changes so myFieldValues included
     export const editPost = (id, myFieldValues) => async dispatch => {

      //** */const response = await streams.put(`/streams/${id}`, myFieldValues);     
     // replacing above restful update by patch instead of put because
     // put will replace all stream's props(id, userID, title, description by
     // only title and description,  patch will make all props intact
     // that is why those updated by put() had lost Edit and Delete buttons
      const response = await blogs.patch(`/posts/${id}`, myFieldValues);

      // dispatch action with type and payload to reducer
     dispatch({type: EDIT_POST, payload: response.data});

     history.push("/");

            };
        
    // ** delete carried no response and payload return deleted id
     export const deletePost = (id) => async dispatch => {
     await blogs.delete(`/posts/${id}`);                      
     // dispatch action with type and payload to reducer
     dispatch({type: DELETE_POST, payload: id});
     
     history.push("/");
        };      

