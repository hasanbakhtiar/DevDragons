import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';

class List extends Component{
  render(){
    return(
      <ol>
        <li className='colorfull'>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ol>
    )
  }
}


class App extends Component{
  render(){
    return(
      <>
      <List />
      <List />
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


