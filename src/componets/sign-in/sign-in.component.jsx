import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


import './sign-in.styles.scss'



//vom folosi class componet pentru ca va trebui sa stocam cea ce va introduce ulilizatorul

class  SingIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        const { email, password } = this.state;

        try{
            auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password:''})
        } catch (error){
            console.log(error);
        }
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })

    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        lable='email'
                        required/>
                    
                    <FormInput
                      type="password"
                      name="password" 
                      value={this.state.password}
                      handleChange={this.handleChange}
                      lable='password'
                      required />
                    
                    <div className='buttons'>
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        
                            Sign in with Google
                        </CustomButton>
                    </div>
      
                </form>

            </div>
        )
    }

}

export default SingIn;