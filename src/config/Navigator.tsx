import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


interface NavigatorProps {
    childComp?: React.ReactNode;
  }

export const Navigator: React.FC<NavigatorProps> = ({ childComp }) => {
    return (
        <Router>
            <div>
                {/*TODO - how do I create dynamic routes for my dynamic links?*/}
                <div>{childComp}</div>

                <Switch>
                    <Route exact path="/">

                    </Route>
                    <Route path="/hi">
                        
                    </Route>
                    <Route path="/bye">
                        
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}