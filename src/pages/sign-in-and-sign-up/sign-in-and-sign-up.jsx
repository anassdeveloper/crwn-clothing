import React from "react";
import Signup from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/signin/signin.component";
import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <Signup />
        </div>
    )
}

export default SignInAndSignUp;