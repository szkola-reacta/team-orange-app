import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import QueryAssets from './components/Assets/QueryAssets';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={QueryAssets}/>
        {/* <Route exact path='/AssetDetails' component={AssetDetails}/> */}
      </Switch>
    </div>
  );
}

export default App;
