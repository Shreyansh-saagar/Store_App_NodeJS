// ---------------------------------------------------------------------------------
// IMPORT STATEMENTS
import path from 'path';
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import ejsLayouts from 'express-ejs-layouts';
import { auth } from './src/Middleware/auth.middleware.js';
import userController from './src/controllers/user.controller.js';
import { lastVisit } from './src/Middleware/lastVisit.middleware.js';
import productController from './src/controllers/product.controller.js';
import { uploadFile } from './src/Middleware/upload-file.middleware.js';
import validateRequest from './src/Middleware/validateProduct.middleware.js';
// ---------------------------------------------------------------------------------

// Server configuration
const server = express()

// Configure Public and src/views Folder 
server.use(express.static("Public"))
server.use(express.static('src/views'))

// setting up parser 
server.use(express.urlencoded({extended: true}))

// setting up cookie-parser
server.use(cookieParser())
server.use(lastVisit)

// setting up express session
server.use(session({
    secret: "lb(ObsfKO^Q7@$;",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))

// setting up ejs
server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),"src","views"))

// setting up ejs-layout
server.use(ejsLayouts)


// creating an instance of productController & userController class
const pc = new productController()
const uc = new userController()

// All Get request 
server.get('/',auth, pc.getProduct)
server.get('/register',uc.getRegister)
server.get('/login',uc.getLoggedIn)
server.get('/logout',uc.logout)
server.get('/new',auth,pc.getNewProduct)
server.get('/update-product/:id',auth,pc.getUpdateProduct)

// All Post request 
server.post('/login',uc.postLogin)
server.post('/register',uc.postRegister)
server.post('/delete-product/:id',auth,pc.deleteProduct)
server.post('/',auth,uploadFile.single('imgurl'),validateRequest,pc.postAddProduct)
server.post('/update-product',auth,uploadFile.single('imgurl'),validateRequest,pc.postUpdateProduct)

// Making server listen on http://localhost:5000
server.listen(5000,()=>{
    console.log('listening on port 5000');
})