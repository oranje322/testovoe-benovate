import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Greeting from "./components/Greeting";
import Users from "./components/Users";

const App = () => {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <Switch>
                    <Route path={'/users'}>
                        <Users/>
                    </Route>
                    <Route path={'/'}>
                        <Greeting/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
