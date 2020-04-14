import React from 'react';
import './App.css';
import SearchBox from './SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { discounts } from './discounts';
import CardArray from './CardArray';
import 'tachyons';

const App = ()  =>{
  return (
    <div className= "App">
      <h2> Student Discount Tracker </h2>
      <SearchBox />
      <CardArray discounts = { discounts }/>
    </div>
  );
}

export default App;
