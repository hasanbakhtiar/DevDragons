import React, { Component } from 'react'
import axios from 'axios';
class App extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            inputVaule:""
        }
    }
 
    
    submitform=(event)=>{
            event.preventDefault();
            axios
            .get(`https://api.github.com/search/users?q=${this.state.inputVaule}`)
            .then(res => this.setState({users:res.data.items}))
            console.log('test');
    }

    render() {
        return (
            <div>
                <h4>User List</h4>

                <form onSubmit={this.submitform}>
                    <input onChange={e=>this.setState({inputVaule:e.target.value})} type="text" />
                    <button type='submit'>search</button>
                </form>

                <ol>
                    {this.state.users.map(item=>(
                        <a href={item.html_url} target='_blank' rel="noreferrer"><li key={item.id}><img width={100} src={item.avatar_url} alt="" />{item.login}</li></a>
                    ))}
                </ol>


            </div>
        )
    }
}

export default App