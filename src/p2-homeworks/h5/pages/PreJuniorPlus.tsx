import React from "react";
import {Route, Switch,NavLink} from "react-router-dom";
import HW12 from "../../h12/HW12";
import {PATH} from "../Routes";
import HW13 from "../../h13/HW13";


function PreJuniorPlus() {
    return (
        <div>
            <Switch>
                 <Route path={PATH.HW12} render={() => <HW12/>}/>
                 <Route path={PATH.HW13} render={() => <HW13/>}/>
            </Switch>
            <NavLink to='/HW12'>HW12</NavLink><br/>
            <NavLink to={PATH.HW13}>HW13</NavLink>
        </div>
    );
}

export default PreJuniorPlus;
