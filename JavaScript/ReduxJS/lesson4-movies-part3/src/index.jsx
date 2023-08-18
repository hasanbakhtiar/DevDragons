import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/bootstrap.css';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { addMovie, deleteMovie, getMoviesFromDatabase } from './manager/actions/movieAction';

const mystore = configureStore();

const result = (
  <Provider store={mystore}>
      <App />
  </Provider>
)


ReactDOM.render(<img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif" alt="" />, document.getElementById('root'));

mystore.dispatch(getMoviesFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})
