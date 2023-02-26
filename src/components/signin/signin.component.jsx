import React from "react";
import CustomButton from "../costum-button/costum-button.component";
import CostumButton from "../costum-button/costum-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

import "./signin.style.scss";

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handlSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        }catch(err){
            console.log(err)
        }
        
    }
    
    handlChange = event => {
        const {value, name } = event.target;
        this.setState({[name]: value});
    }

    render(){
        const { email, password } = this.state;
        return(
            <div className="sign-in">
                 <h2>I already have an account</h2>
                 <span>Sign in with your email and password</span>
                 <form onSubmit={this.handlSubmit}>
                    <FormInput 
                          handleChange={this.handlChange}
                          type="email" 
                          value={email} 
                          label="email" 
                          name="email" required />
                    <FormInput 
                          handleChange={this.handlChange}
                          type="password" 
                          value={password} 
                          label="password" 
                          name="password" required />
                    
                    <div className="btns">
                    <CostumButton type="submit">SIGN IN</CostumButton>
                    
                    <CustomButton onClick={ signInWithGoogle } type="button" isGoogleSignIn>
                        sign in with google
                    </CustomButton>
                    </div>
                 </form>
            </div>
        )
    }
}

export default SignIn;