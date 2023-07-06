import axios from 'axios';
import React, { Component } from 'react'

export class App extends Component {
    constructor(){
        super();
        this.state={
            prodata:[]
        }
    }
    
    
    componentDidMount(){
        axios.get('https://dummyjson.com/products')
        .then(res=>this.setState({prodata:res.data.products}))
    }
    
    
  render() {
    return (
      <ol>
        {this.state.prodata.map(item=>{
            return <li key={item.id}>
                {item.title}</li>
        })}
      </ol>
    )
  }
}

export default App