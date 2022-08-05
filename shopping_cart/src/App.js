import { Component, useContext } from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import {Contex} from './Data'

function App() {
  const items = useContext(Contex)
  return (
    <div className="App">
      <div className="item1">
        <Component1 />
      </div>
      <div className="item2">
        <Component2 />
      </div>
      <div className="item3">
        <Component3 />
      </div>
    </div>
  );
}

export default App;
