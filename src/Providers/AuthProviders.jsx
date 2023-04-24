import React, {createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)

}
// sign in user
const signInUser = (email, password) =>{
return signInWithEmailAndPassword(auth,email,password);
}
const googleProvider = new GoogleAuthProvider();
const googleSignIn = () =>{
return signInWithPopup(auth,googleProvider)
}

// observe auth state change
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
console.log('auth state change',currentUser);
setUser(currentUser);
setLoading(false)
});

return ()=>{
unsubscribe();
}

},[])

 const logOut = () =>{
return signOut(auth);
}

const authInfo = {
user,
loading,
createUser,
signInUser,
googleSignIn,
logOut,
}
  return (
  <AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
  );
};

export default AuthProviders;