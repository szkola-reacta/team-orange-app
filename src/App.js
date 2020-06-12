import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import QueryAssets from './components/Assets/QueryAssets';
import QueryStatuses from './components/Statuses/QueryStatuses';
import EditStatus from './components/Statuses/EditStatus';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={QueryAssets}/>
        <Route exact path='/QueryStatuses' component={QueryStatuses}/>
        <Route exact path='/EditStatus' render={(props) => <EditStatus {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
