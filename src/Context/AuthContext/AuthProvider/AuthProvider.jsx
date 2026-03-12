import React from 'react';
import { AuthContext } from '../AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';

const AuthProvider = ({children}) => {
   

    const  createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const authINfo = {
        createUser,
    }
    return (
        <div>
            <AuthContext value={authINfo} >
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
