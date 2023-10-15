
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateCurrentUser, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider );
    // const credentials = GoogleAuthProvider.credentialFromResult( result )

    const { displayName, email, photoURL, uid} = result.user;

    return {
        ok: true,
        displayName,
        email,
        photoURL,
        uid
    }


    
  } catch (error) {

    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  

    return {
        ok: false,
        errorMessage,

    }
  }
}


export const registrerUserWithEmailPassword = async ({ email, password, displayName}) =>{
  try {

   const resp =  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
   const { uid, photoURL } = resp.user;
  
   await updateProfile( FirebaseAuth.currentUser, {
    displayName
   } );


   return {
    ok: true,
    uid, 
    photoURL, 
    email,
    displayName,
   }
    
  } catch (error) {
    // console.log(error)
    
    return {
      ok: false,
      errorMessage: error.message
    }
    
  }

}
