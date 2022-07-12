import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Header } from './component/Header';
import { Main } from './component/Main';

const App:React.FC = () => (
  <>
    <Header />
    <Main />
  </>
);

export default App;
