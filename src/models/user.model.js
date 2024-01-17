// USER MODEL
// -------------------------------------------------------------------------------------------
export default class userModel{
    // Creating user model structure to store user details
    constructor(_userId,_name,_email,_password){
        this.userId = _userId;
        this.name = _name;
        this.email = _email;
        this.password = _password
    }

    // To add a new user to the list
    static addUser(userId,name,email,password){
        let newUser = new userModel(
            userId,
            name,
            email,
            password
        )
        users.push(newUser);
    }
    
    // To check user validity for login
    static isValidUser(email,password){
        const result = users.find((u)=> u.email === email && u.password === password)
        return result
    }
}
// -------------------------------------------------------------------------------------------

// User List ---------------------------------------------------------------------------------
var users = []
// -------------------------------------------------------------------------------------------