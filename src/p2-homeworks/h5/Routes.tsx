import React from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import HW1 from '../../p2-homeworks/h1/HW1';
import HW2 from '../../p2-homeworks/h2/HW2';
import HW3 from '../../p2-homeworks/h3/HW3';
import HW4 from '../../p2-homeworks/h4/HW4';
import HW6 from "../h6/HW6";
import PreJuniorPlus from "./pages/PreJuniorPlus";
import PrePreJunior from "./pages/pre-PreJunior";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import HW11 from "../h11/HW11";


export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    PRE_JUNIOR_PLUS: "/PreJuniorPlus",
    PRE_PREJUNIOR:"/PrePreJunior",
    HW1: "/hw1",
    HW2: "/hw2",
    HW3: "/HW3",
    HW4: "/HW4",
    HW6: "/HW6",
    HW7: "/HW7",
    HW8: "/HW8",
    HW9: "/HW9",
    HW10: "/HW10",
    HW11: "/HW11",
    HW12: "/HW12",
    HW13: "/HW13",
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.HW1} exact render={() => <HW1/>}/>
                <Route path={PATH.HW2} exact render={() => <HW2/>}/>
                <Route path={PATH.HW3} exact render={() => <HW3/>}/>
                <Route path={PATH.HW4} exact render={() => <HW4/>}/>
                <Route path={PATH.HW6} exact render={() => <HW6/>}/>
                <Route path={PATH.HW7} exact render={() => <HW7/>}/>
                <Route path={PATH.HW8} exact render={() => <HW8/>}/>
                <Route path={PATH.HW9} exact render={() => <HW9/>}/>
                <Route path={PATH.HW10} exact render={() => <HW10/>}/>
                <Route path={PATH.HW11} exact render={() => <HW11/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={[PATH.PRE_JUNIOR_PLUS, PATH.HW12, PATH.HW13]} render={() => <PreJuniorPlus/>}/>

                {/*<Route path={PATH.PRE_PREJUNIOR} render={() => <PrePreJunior/>}/>*/}
                //

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
