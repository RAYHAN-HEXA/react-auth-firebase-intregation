import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [laoding,setLoading] = useState(true)
   

    const  createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)


    }
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
        .then(result =>{
            console.log('signout successfull',result)
        })
        .catch(error =>{
            console.log('signout error',error.message)
        })
    }
    const GoogleSignIn =() =>{
    return signInWithPopup(auth,googleProvider);

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
        setUser(currentUser);
        setLoading(false);
    })
    // CLAER THE OBSERVER ON UMMOUNT 
    return ()=>{
        unsubscribe();
    }
},[])


   

    const authINfo = {
        user,
        createUser,
        signIn,
        signOutUser,
        laoding,
        GoogleSignIn
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
