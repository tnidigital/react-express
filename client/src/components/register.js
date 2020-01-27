import React from 'react';
import {Link} from 'react-router-dom';
//import "./register.css"


class Register extends React.Component{
    constructor(props){
       super(props);

       this.state={
           firstName: "",
           lastName: "",
           email: "",
           emailError: "",
           firstNameError: "",
           lastNameError: "",
           regResponse:[],  
       }
    }

    onValueChange=(event)=>{
       this.setState({
           [event.target.name]: event.target.value
       });
    }

    formValidate=()=>{
        let firstNameError= "";
        let lastNameError="";
        let emailError="";

        if(this.state.firstName === "" || this.state.firstName ==='null'){
            firstNameError="firstName is required"
        }
        if (firstNameError) {
            this.setState({firstNameError});
            return false;
        }
        
        if(this.state.lastName=== "" || this.state.lastName === 'null'){
           lastNameError="lastName is required"
        }
        if(lastNameError){
            this.setState({lastNameError});
            return false;
        }

        if(!this.state.email.includes("@")){
            emailError="invalid email"
        }
        if(this.state.email === '' || this.state.email === 'null'){
            emailError="email is required"
        }
        if(emailError){
            this.setState({emailError});
            return false
        }


        return true;
    };

    submit=(event)=>{
        const user={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
        event.preventDefault();
        const isValid=this.formValidate();


        if(isValid){
        fetch("http://localhost:9000/register",{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(res=> res.text())
        .then(res=> this.setState({
           regResponse: res
        }))
    }
    }

    render(){
        const{ error}=this.state;
        return(
            <div className="parent">
            <div className="formSubmit">
                <h1>Register</h1>
                <div className="firstName">
                <input
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                  value={this.state.firstName}
                  onChange={this.onValueChange}
                />
                <label>firstName</label><br/>
                <div style={{color: "red"}}>{this.state.firstNameError}</div>
                </div>
                <input
                  type="lastName"
                  name="lastName"
                  placeholder="lastName"
                  value={this.state.lastName}
                  onChange={this.onValueChange}
                />
                <label>lastName</label><br/>
                <div style={{color: "red"}}>{this.state.lastNameError}</div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onValueChange}
                />
                <label>email</label><br/>
                <div style={{color: "red"}}>{this.state.emailError}</div>
                <button id="submit" onClick={this.submit}>
                   register
                </button><br/>
                <span>already have a account please login <Link to="/login">login</Link></span>
            </div>
             <div>
                 {this.state.regResponse}
             </div>
            </div>
        );
    }
}

export default Register