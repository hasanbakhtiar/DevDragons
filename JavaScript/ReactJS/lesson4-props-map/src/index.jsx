import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/style.css';
import ProductList from './components/ProductList';
import Nav from './components/Nav';






class App extends Component {
  render() {
    return (
    <>
    <Nav />
    <ProductList />
    </>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


