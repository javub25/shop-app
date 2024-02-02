import { getAuth, signOut } from "firebase/auth";

const logOut = () => 
{
    const auth = getAuth();
   /* The code `signOut(auth).then(() => { // Sign-out successful. }).catch((error) => { // An error
   happened. });` is performing a sign-out operation using the `signOut` function from the Firebase
   Authentication library. */
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        throw new Error(error);
    // An error happened.
    });
}
export default logOut;
