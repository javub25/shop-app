import CreateUser from "@features/User/create.jsx";
import LoginUser from "@features/User/login.jsx";
import { getAuth } from "firebase/auth";
import EmailValidator from "@features/Form/EmailValidator.jsx";

/**
 * The SendData function is used to handle form submission in a React application, performing email
 * validation and either creating a new user or logging in an existing user.
 */
const SendData = (props) => 
    {
    props.event.preventDefault();
    const userEmail = props.event.target.email.value.toLowerCase();
    const passwordEmail = props.event.target.password.value;
    const auth = getAuth();
    const EmailStatus = EmailValidator(userEmail);

    if(EmailStatus)
    {
        props.registerState ? CreateUser(props.eventMsgError, props.changeMsgError, props.changeUser, auth, userEmail, passwordEmail) : LoginUser(props.eventMsgError, props.changeMsgError, props.changeUser, auth, userEmail, passwordEmail)
    }
    else {
        props.changeMsgError("Por favor, introduzca un correo electrónico válido.")
    }
}
export default SendData;