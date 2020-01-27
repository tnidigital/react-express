import React from 'react';
import { Link } from 'react-router-dom';
import Register from './register'
import {Route} from 'react-router-dom'


class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            errors: {},
            apiResponse:[]
        }
    }
    onChangeValue=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submit=(event)=>{
     console.log("submit called")
     fetch("http://localhost:9000/api")
      .then(res=> res.text())
      .then(res=> 
        this.setState({
          apiResponse: res  
      })
      )
    }
    render(){
        const {email}= this.state;
        const {apiResponse}= this.state;
        return(
            <div>
                <input  
                   type="text" 
                   name="email" 
                   value={email} 
                   onChange={this.onChangeValue}
                />
                <label>email</label>
                <button id='submit' onClick={this.submit}>submit</button>
                <div>
                   <Link to="/register">register</Link>
                </div>
                <div>
                   {this.state.apiResponse}
                </div>
            </div>
        );
    }
}

export default Login









