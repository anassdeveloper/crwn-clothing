import React from "react";
//import "./signin.style.scss";

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handlSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }
    
    handlChange = event => {
        const {value, name } = event.target;
        this.setState({[name]: value});
    }

    render(){
        const { email, password } = this.state;
        return(
            <div className="signin">
                 <h2>I already have an account</h2>
                 <span>Sign in with your email and password</span>
                 <form onSubmit={this.handlSubmit}>
                    <input onChange={this.handlChange} type="email" value={email} id="email" name="email" required />
                    <label forhtml="email">Email</label>
                    <input onChange={this.handlChange} type="password" value={password} id="pass" name="password" required />
                    <label forhtml="password">Password</label>
                    <input type="submit" value="send" />
                 </form>
            </div>
        )
    }
}

export default SignIn;