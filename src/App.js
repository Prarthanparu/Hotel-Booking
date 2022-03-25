import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './Components/Navbar';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:paru" component={SingleRoom}/>
        <Route component={Error} />
      </Switch>  
    </React.Fragment>
    
    
  );
}

export default App;
