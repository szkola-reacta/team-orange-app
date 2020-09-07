import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Header from './components/common/Header';

import QueryAssets from './components/Assets/QueryAssets';

import QueryStatuses from './components/Statuses/QueryStatuses';
import EditStatus from './components/Statuses/EditStatus';
import CreateStatus from './components/Statuses/CreateStatus';

import QueryManufacturers from './components/Manufacturers/QueryManufacturers';
import EditManufacturer from './components/Manufacturers/EditManufacturer';
import CreateManufacturer from './components/Manufacturers/CreateManufacturer';

import QueryDepartments from './components/Departments/QueryDepartments';
import CreateDepartment from './components/Departments/CreateDepartment';
import EditDepartment from './components/Departments/EditDepartment';

import CreateAsset from './components/Assets/CreateAsset';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={QueryAssets} />
        <Route exact path='/QueryAssets' component={QueryAssets} />
        <Route exact path='/QueryStatuses' component={QueryStatuses} />
        <Route exact path='/EditStatus' render={(props) => <EditStatus {...props} />} />
        <Route exact path='/CreateStatus' render={(props) => <CreateStatus {...props} />} />
        <Route exact path='/QueryManufacturers' component={QueryManufacturers} />
        <Route exact path='/EditManufacturer' render={(props) => <EditManufacturer {...props}/>}/>
        <Route exact path='/CreateManufacturer' component={CreateManufacturer} />
        <Route exact path='/QueryDepartments' component={QueryDepartments} />
        <Route exact path='/CreateDepartment' component={CreateDepartment} />
        <Route exact path='/EditDepartment' render={(props) => <EditDepartment {...props}/>}/>
        <Route exact path='/CreateAsset' render={(props) => <CreateAsset {...props}/>}/>
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
