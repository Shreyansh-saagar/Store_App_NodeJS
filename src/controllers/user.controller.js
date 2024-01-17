import um from '../models/user.model.js'
import pm from '../models/product.model.js'
// ------------------------------------------------------------------------------------------------

export default class userController{

    // To navigate user to register page
    getRegister(req,res){
        res.render('register')
    }

    // To navigate user to login page
    getLoggedIn(req,res){
        res.render('login',{errormessage:null})
    }

    // To store new register user into users list
    postRegister(req,res){
        const { userId,name, email, password } = req.body;
        um.addUser(userId,name, email, password)
        res.render('login',{errormessage:null})
    }

    // To handle user login request
    postLogin(req,res){
        const {email,password} = req.body
        const user = um.isValidUser(email, password)
        if(!user){
            res.render('login',{errormessage: 'Invalid Credentials'})
        }
        req.session.userEmail = email
        var products = pm.getProduct()
        res.render('products',{products, userEmail:req.session.userEmail})
    }

    // Logout functionality for user if they are logged in
    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/login')
            }
        })
    }

}
// ----------------------------------------------------------------------------------------------------
