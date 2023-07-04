import React, { Component } from 'react'

const electronic = [
    {
        id:1,
        title:"Samsung1",

    },
    {
        id:2,
        title:"Samsung2",
        
    },
    {
        id:3,
        title:"Samsung3",
        
    }
]

const clothes = [
    {
        id:1,
        title:"clothes1"
    },
    {
        id:1,
        title:"clothes2"
    },
    {
        id:1,
        title:"clothes3"
    }
]


 class BasicCategory extends Component {
    constructor(){
        super();
        this.state={
            selector:electronic
        }
    }
    
  render() {
    return (
      <div className='container my-5'>
        <button onClick={()=>{
            this.setState({
                selector:electronic
            })
        }}>electronic</button>
        <button onClick={()=>{
            this.setState({
                selector:clothes
            })
        }}>clothes</button>
        <ol>{this.state.selector.map(item=>(
            <li>{item.title}</li>
        ))}</ol>
      </div>
    )
  }
}

export default BasicCategory