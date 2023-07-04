import React, { Component } from 'react'

const user = {
    defaultEmail:"hi@gmail.com",
    defaultPass:"test"
}




class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            pass:"",
            alert:{
                color:"",
                text:""
            }
        }
    }


    formSubmit = (e)=>{
        e.preventDefault();

       if (!this.state.email || !this.state.pass) {
       this.setState({
        alert:{
            color:"warning",
            text:'please, fill input'
        }
       })
       }else{
        if (this.state.email === user.defaultEmail && this.state.pass === user.defaultPass) {
            this.setState({
                alert:{
                    color:"success",
                    text:'Login is successfully'
                }
               })
        }else{
            this.setState({
                alert:{
                    color:"danger",
                    text:'email or password is wrong'
                }
               })
        }
       }
  
    }
    
    
    
    render() {
        return (
            <div className='container'>
                <h1 className='text-center my-5'>Login</h1>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="col-6">
                        <p className={`alert alert-${this.state.alert.color} text-center`}>{this.state.alert.text}</p>
                        <form onSubmit={this.formSubmit}>
                            <div className="mb-3">
                                <label  className="form-label">Email</label>
                                <input type="email" className="form-control"  placeholder='enter email'
                                onChange={(e)=>{
                                    this.setState({
                                        email:e.target.value
                                    })
                                }}
                                 />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder='enter password'
                                onChange={(e)=>{
                                    this.setState({
                                        pass:e.target.value
                                    })
                                }}
                                 />
                            </div>
                       
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        )
    }
}

export default Login