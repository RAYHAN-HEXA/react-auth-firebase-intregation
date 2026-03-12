import React, { useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';

const AuthProvider = ({children}) => {
   

    const  createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)


    }

    // useEffect(()=> {},[])
    // useEffect(()=>{
    //     // step 1 : observer set 
    //     // step 2 : set in a variable 
    //     //step 3 : retrun and call  the varible so that you can clear the ref
    // },[])
    // GET CURRENT USER INFO //
//     onAuthStateChanged(auth,(currentUser) =>{
//        if(currentUser){
//  console.log('inside observer if',currentUser)
//     }
       
//        else{
//         console.log('current user else',currentUser)
//        }
//     })

useEffect(()=>{
    // Sset the  observer 
    const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
        console.log('current user in auth state change', currentUser)
    })
    // CLAER THE OBSERVER ON UMMOUNT 
    return ()=>{
        unsubscribe();
    }
})
   

    const authINfo = {
        createUser,
        signIn
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
