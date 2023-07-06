import React, { Component } from 'react'


class List extends Component{

    componentWillUnmount(){
        alert("deleted")
    }
    render(){
        return(
            <ol>
                <li>test list</li>
                <li>test list</li>
                <li>test list</li>
                <li>test list</li>
            </ol>
        )
    }
}



class LifeCycle extends Component {

    constructor() {
        super();
        this.state = {
            text: "Hello",
            display:true,
            initial:""
        }
    }

    // componentDidUpdate(){
    //     document.querySelector('h1').style.color = 'red';
    // }
    
    // componentDidMount(){
    //     this.setState({initial:"new vallue"})
    // }
    render() {
        let info;
        if(this.state.display){
            info = <List />
        }
        return (
            <div className='container'>
                <h1>{this.state.text}</h1>
                <p>{this.state.initial}</p>
                {info}
                <button  onClick={()=>{
                    this.setState({text:'changed'})
                }}>test</button>
                <button onClick={()=>{
                    this.setState({display:false})
                }}>delete</button>
            </div>
        )
    }
}

export default LifeCycle