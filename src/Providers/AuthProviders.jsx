import React, {createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
const [user, setUser] = useState(null);

const createUser = (email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)

}
// sign in user
const signInUser = (email, password) =>{
return signInWithEmailAndPassword(auth,email,password);
}



const authInfo = {
user,
createUser,
signInUser,
}
  return (
  <AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
  );
};

export default AuthProviders;