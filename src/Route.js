import React from "react";
import {  Route, Switch  } from "react-router-dom";
import AppliedRoute from "./Components/AppliedRoute";
import AddNote from "./containers/AddNote";


export default ({ childprops }) => 
    <Switch>
        <AppliedRoute path = "/" exact component = {AddNote} props={childprops} />
    </Switch>;