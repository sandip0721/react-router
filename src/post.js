import React from 'react';
import {useHistory , useLocation , useParams , useRouteMatch } from 'react-router-dom';
 function post(props){
   console.log(props);
   const Hostory = useHistory()
   console.log(History);
   const Location = useLocation()
   console.log(Location);
   const Params = useParams()
   console.log(Params);
   const RouteMatch = useRouteMatch()
   console.log(RouteMatch)

   return (
     <div>
       <h1>Hello Post</h1>
     </div>
   )
 };
 export default post;