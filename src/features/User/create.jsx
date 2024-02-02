import {createUserWithEmailAndPassword } from "firebase/auth";

const create = (handleErrorMsg, setMessageError, setUsuario, auth, userEmail, passwordEmail) => 
{
   /* The code is using the `createUserWithEmailAndPassword` function from the `firebase/auth` module
   to create a new user with the provided email and password. */
    createUserWithEmailAndPassword(auth, userEmail, passwordEmail)
        .then((userCredential) => {
        setUsuario(userCredential);
    // ...
})
    .catch((error) => {
        const errorCode = error.code;
        handleErrorMsg(errorCode, setMessageError);
// ..
});    
}
export default create;