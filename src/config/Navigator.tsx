import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    RouteComponentProps,
    Switch
} from 'react-router-dom';

export const Navigator = () => {
    return (
        <Router>
            <div>

                {/TODO - move the unordered list somewhere else, this should just be the router/}
                <ul>
                    <li><Link to="/hi">hi</Link></li>
                    <li><Link to="/bye">bye</Link></li>
                </ul>

                <Switch>
                    <Route exact path="/">

                    </Route>
                    <Route exact path="/hi">
                        
                    </Route>
                    <Route exact path="/bye">
                        
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}