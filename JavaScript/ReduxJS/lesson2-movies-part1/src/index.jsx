import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/bootstrap.css';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { addMovie } from './manager/actions/movieAction';

const mystore = configureStore();

mystore.subscribe(() => {
  console.log(mystore.getState());
});







mystore.dispatch(addMovie({img:"https://m.media-amazon.com/images/M/MV5BMjk3NTYyMzc4Nl5BMl5BanBnXkFtZTcwODU3ODMzMw@@._V1_.jpg",infoTitle:"Last Kingdom",infoPrice:32,infoRate:9.8}))

mystore.dispatch(addMovie({img:"https://m.media-amazon.com/images/M/MV5BMjk3NTYyMzc4Nl5BMl5BanBnXkFtZTcwODU3ODMzMw@@._V1_.jpg",infoTitle:"Fight Club",infoPrice:32,infoRate:9.8}))

mystore.dispatch(addMovie({img:"https://m.media-amazon.com/images/M/MV5BMjk3NTYyMzc4Nl5BMl5BanBnXkFtZTcwODU3ODMzMw@@._V1_.jpg",infoTitle:"Fight Club",infoPrice:32,infoRate:9.8}))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>
);
