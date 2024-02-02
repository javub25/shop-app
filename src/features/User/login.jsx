import { signInWithEmailAndPassword } from "firebase/auth";

const login = (handleError, setMessageError, setUsuario, auth, userEmail, passwordEmail) => 
{
  /* The code `signInWithEmailAndPassword(auth, userEmail,  passwordEmail)` is a function provided by
  the Firebase authentication library. It is used to sign in a user with their email and password. */
  signInWithEmailAndPassword(auth, userEmail,  passwordEmail)
  .then((userCredential) => {
    // Signed in 
    setUsuario(userCredential);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    handleError(errorCode, setMessageError);
  });
}
export default login;