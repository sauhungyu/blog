import React from "react";
import history from "../history";
//import { BrowserRouter, Route } from "react-router-dom";
// import a plain Router only required if custom history wanted
import { Router, Route, Switch } from "react-router-dom";

import PostCreate from "./posts/PostCreate";
import PostList from "./posts/PostList";
import PostShow from "./posts/PostShow";
import PostEdit from "./posts/PostEdit";
import PostDelete from "./posts/PostDelete";



//import Header from "./Header";

// Switch applies to exact route if even a variable match :id (=variable)
// will no longer direct to two routes at the same time
// else /new and /:id will have this issue

// also BrowserRouter component no longer called
// but a plain router with props history added
const App = () => {

    return (
    <div className="ui container">
       

<Router history = {history}>
<div>
 

<Switch>
<Route path="/" exact component={PostList} />
<Route path="/posts/new" exact component={PostCreate} />
<Route path="/posts/edit/:id" exact component={PostEdit} />
<Route path="/posts/delete/:id" exact component={PostDelete} />
<Route path="/posts/:id" exact component={PostShow} />

</Switch>

</div>
</Router>
</div>
          );
};


export default App;