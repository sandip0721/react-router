import React from 'react'
import {BrowserRouter, Route , Switch,Link,Redirect } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';
import Post from './post';


export default function App (){
  return (
    <BrowserRouter>
      <Link to = "/home"> Home</Link>
      <br/>
      <Link to = "/about">About</Link>
      <br/>
      <Link to = "/*">NoMatch</Link>
      <br/>
      <Link to = "/post">Post</Link>
      <br/>
      <Link to = "/main"> Main</Link>
       <Switch>

           <Route exact path='/main'>
             <Redirect to = "/home"/>
           </Route>
           <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
           <Route path='/post' component={Post}/>
            <Route path='/*' component={NoMatch}/>
        </Switch>
    </BrowserRouter>
  )
}