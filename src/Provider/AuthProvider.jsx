import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })

    return unsubscribe;
  }, [])
  
  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    return signOut(auth)
  }
  const authInfo = {
    user,
    logOut,
    loginWithEmail,
    loginWithGoogle,
    registerWithEmail,
    forgetPassword
  }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;