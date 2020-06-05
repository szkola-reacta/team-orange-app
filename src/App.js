import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Assets from './components/Assets';
import AssetDetails from './components/AssetDetails';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Assets}/>
        <Route exact path='/AssetDetails' component={AssetDetails}/>
      </Switch>
    </div>
  );
}

export default App;
