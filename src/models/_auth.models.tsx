import React, { createContext, useState, useEffect } from "react";
import firebase, { app, auth } from "../globals/firebase";
import styled from 'styled-components';
import { Layout } from '../globals/styles.globals';
import { ControledTextBox } from "../controls/input.controls";
import { Button } from "../controls/button.controls";

export class IAuthContext{
  email: string
  username: string;
  loggedIn: boolean = false
}



const LogInStyles = {
  Stage: styled.div`
    display: flex;

    justify-content: center;
    padding-top: 10%;
  `,

  Box: styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    max-width: 100%;
    border: ${Layout.options.border};
    border-radius: ${Layout.options.borderRadius};
    padding: 10px;
    box-shadow: ${Layout.options.shadow.standard};
    flex-grow: 0;
  `,
}

const LogInPage = ({ logIn }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    logIn(userName + '@wegnerlawfirm.com', password)
  }

  return (
    <LogInStyles.Stage>
      <LogInStyles.Box>
        <Layout.Row>
          <ControledTextBox
            label='Username'
            value={userName}
            onChange={setUserName}
          />
        </Layout.Row>
        <Layout.Row>
          <ControledTextBox
            label='Password'
            value={password}
            onChange={setPassword}
            inputType='password'
          />
        </Layout.Row>
        <Layout.Row>
          <Button
            label='Submit'
            onClick={()=>handleSubmit()}
          />
        </Layout.Row>
      </LogInStyles.Box>
    </LogInStyles.Stage>
  )
}

export const AuthContext = createContext(new IAuthContext())

export const AuthProvider=({children})=>{
  const [authUser, setAuthUser]=useState(null)

  const getEmail=()=>{
    if(authUser===null || authUser.email=== undefined){return ''}
    return authUser.email
  }

  const authContext: IAuthContext = {
    email: getEmail(),
    username: getUsername(getEmail()),
    loggedIn: authUser!==null,
  }

  const logIn= (x, y) => signInWithEmailAndPassword(x, y, setAuthUser)

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setAuthUser(user)    
      }
    });
  },[]);

  const getScreen=()=>{
    if(authUser){
      return(<React.Fragment>{children}</React.Fragment>)
    }else{
      return <LogInPage logIn={logIn}/>
    }
  }

  return (
    <AuthContext.Provider value={authContext}>
      {getScreen()}
    </AuthContext.Provider>
  )
}

function getUsername(email:string):string{
  if(email===undefined || email===''){
    return ''
  }else{
    return email.split('@')[0].trim()
  }
}

function signInWithEmailAndPassword(email, password, setter) {
  auth.signInWithEmailAndPassword(email, password).then(result => {
    const newUser = result.user;
    setter(newUser);
  });
}

