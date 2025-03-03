import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import Arts from './components/Arts'

import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import './index.css';
import './flags.css';        

function App() {
  return (
    
     <React.StrictMode>
    <PrimeReactProvider>
    <Arts/>
    </PrimeReactProvider>
</React.StrictMode>
    
);
  
}

export default App;
