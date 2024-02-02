   // Import the functions you need from the SDKs you need
   import { initializeApp } from "firebase/app";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries   
    const Firebase = () => 
    {
 
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDTvyg8W1vRHJmVf4FJFzvbKD8P3qyfQkY",
            authDomain: "shop-c6423.firebaseapp.com",
            projectId: "shop-c6423",
            storageBucket: "shop-c6423.appspot.com",
            messagingSenderId: "482735692542",
            appId: "1:482735692542:web:41bd55002d500f0857e3af"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        
    return app;
}

export default Firebase;