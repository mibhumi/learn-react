import React from 'react';
import './index.css';
import './App.css';
import ShowForm from './Component/RegistrationForm/ShowForm';
import Header from './Component/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';

function App() {

  return (

      <BrowserRouter>
          <div className="App">
            <Header/>
                <Route path='/home' component={Home} />
                <Route path='/form' component={ShowForm} />
          </div>
      </BrowserRouter>
  );
}

export default App;


