 /**
    * The function `handleErrorMsg` takes an error code and a function `setMessageError` as
    * parameters, and sets a corresponding error message based on the error code.
*/
 const handleErrorMsg = (errorCode, setMessageError) =>
 {
     const ErrorsCode = 
     {
         "auth/invalid-credential": "Por favor, introduzca una cuenta existente",
         "auth/missing-password": "Por favor, introduzca una contraseña",
         "auth/weak-password": "La contraseña no debe ser menos de 6 caracteres",
         "auth/email-already-in-use": "La cuenta ya existe para ese correo electrónico."
     }
     /* The code `if(ErrorsCode.hasOwnProperty(errorCode))` checks if the `ErrorsCode` object has a
     property with the name specified by the `errorCode` parameter. If it does, it means that there
     is a corresponding error message for that error code. */
     if(ErrorsCode.hasOwnProperty(errorCode))
     {
         setMessageError(ErrorsCode[errorCode])
     }
 }
 export default handleErrorMsg;