import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/bootstrap.css';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { addMovie, deleteMovie } from './manager/actions/movieAction';

const mystore = configureStore();

mystore.subscribe(() => {
  console.log(mystore.getState());
});







mystore.dispatch(addMovie({image:"https://m.media-amazon.com/images/M/MV5BMjk3NTYyMzc4Nl5BMl5BanBnXkFtZTcwODU3ODMzMw@@._V1_.jpg",title:"Last Kingdom",price:32,rate:9.8}))

mystore.dispatch(addMovie({image:"https://m.media-amazon.com/images/M/MV5BMjk3NTYyMzc4Nl5BMl5BanBnXkFtZTcwODU3ODMzMw@@._V1_.jpg",title:"Fight Club",price:32,rate:9.8}))

const test = mystore.dispatch(addMovie({image:"https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg",title:"Fight Club",price:32,rate:9.8}))

console.log(test.movie.id);
mystore.dispatch(deleteMovie({id:test.movie.id}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>
);
