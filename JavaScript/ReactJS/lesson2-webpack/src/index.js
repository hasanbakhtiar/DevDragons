import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import myphoto from './images/photo.jpg';

class App extends React.Component{
    render(){
        return(
          <>
            <h1>Hello React</h1>
            <img src={myphoto} alt="" />
          </>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));