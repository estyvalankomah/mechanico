import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Performance from '../pages/Performance';
import Settings from '../pages/Settings';
import Workshop from '../pages/Workshop';

function View() {
  return (
    <div className="view">
        <Switch>
            <Route path="/dashboard/workshop">
              <Workshop />
            </Route>
            <Route path="/dashboard/performance">
              <Performance />
            </Route>
            <Route path="/dashboard/settings">
              <Settings />
            </Route>
        </Switch>
        {/* <Settings /> */}
        {/* <Performance /> */}
        {/* <Workshop /> */}
    </div>
  );
}

export default View;
