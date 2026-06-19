import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const authInfo = {
    loginWithEmail,
    loginWithGoogle,
    registerWithEmail
  }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;