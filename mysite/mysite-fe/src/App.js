import './App.scss';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>    
      <Header />
      <HomePage />
    </Fragment>
  );
}

export default App;
