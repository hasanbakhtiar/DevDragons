import React, { Component } from 'react'



const product = {
    title:"Logitech Mouse",
    price:45,
    stock:5,
}



class Counter extends Component {
 
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.state = {
            count:1,
            stockAlert:{
                text:"in stock",
                color:"success"
            }
        }
    }


    increment(){
        if (this.state.count < product.stock ) {
            this.setState({
                count: this.state.count + 1
            })
        }else{
            this.setState({
                stockAlert:{
                    text:"stock out",
                    color:"danger"
                }
            })
        }
    }

    decrement=()=>{
      if (this.state.count > 1) {
        this.setState({
            count: this.state.count - 1,
            stockAlert:{
                text:"in stock ",
                color:"success"
            }
        })
      }
    }
    
    render() {
    return (
      <div className='container my-5' >
                <p className='text-primary'>{product.title}</p>
                <p>Price:{product.price * this.state.count}$</p>
                <p className={`text-${this.state.stockAlert.color}`}>{this.state.stockAlert.text}</p>
                <button className={`btn btn-danger ${this.state.count>1?'':'disabled'}`} onClick={this.decrement}>-</button>
                        <span className='mx-3'>{this.state.count}</span>
                <button className='btn btn-success'  onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default Counter