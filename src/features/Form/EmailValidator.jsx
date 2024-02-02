const EmailValidator = (userEmail) => 
{
    return /^.+@.+\..+$/.test(userEmail)
}
export default EmailValidator;