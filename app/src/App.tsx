//import './App.css';
import React from 'react';
import SiteDataParser from './services/SiteDataParser';
import { indexData } from './data';


const App: React.FC = () => {
  return (
    <div className="content">
      <SiteDataParser data={indexData}/>
    </div>
  );
};

export default App;
