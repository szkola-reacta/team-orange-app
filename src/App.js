import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import QueryAssets from './components/Assets/QueryAssets';
import QueryStatuses from './components/Statuses/QueryStatuses';
import EditStatus from './components/Statuses/EditStatus';
import CreateStatus from './components/Statuses/CreateStatus';

import QueryManufacturers from './components/Manufacturers/QueryManufacturers';
import EditManufacturer from './components/Manufacturers/EditManufacturer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={QueryAssets}/>
        <Route exact path='/QueryStatuses' component={QueryStatuses}/>
        <Route exact path='/EditStatus' render={(props) => <EditStatus {...props} />}/>
        <Route exact path='/CreateStatus' render={(props) => <CreateStatus {...props} />} />
        <Route exact path='/QueryManufacturers' component={QueryManufacturers} />
        <Route exact path='/EditManufacturer' render={(props) => <EditManufacturer {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
