import * as path from 'path'
import pm from '../models/product.model.js'
// ------------------------------------------------------------------------------------------------

export default class productController{
    // To fetch all products in table view
    getProduct = (req,res)=>{
        let products = pm.getProduct()
        res.render('products',{products:products, userEmail:req.session.userEmail});
    }

    // To let user navigate to add product page
    getNewProduct(req,res){
        res.render('new-product',{errormessage:null, userEmail:req.session.userEmail})
    }

    // To check if product exists in model or not if exists then navigate to update product
    getUpdateProduct(req,res,next){
        const id = req.params.id;
        const productFound = pm.getById(id)
        if(productFound){
            res.render('update-product',{product:productFound,errormessage:null, userEmail:req.session.userEmail})
        }
        else{
            res.status(404).send('Product Not Found')
        }
    }

    // To check if the product exists or not if exists remove it from the table view
    deleteProduct(req,res){
        const id = req.params.id;
        const productFound = pm.getById(id);
          if (!productFound){
            return res.status(401).send('Product not found');
          }
        pm.delete(id);
        var products = pm.getProduct();
        res.render('products', { products , userEmail:req.session.userEmail});
    }

    // To update existing products details that user have passed through interface
    postUpdateProduct(req,res){
        const {id,name,desc,price} = req.body
        const imgurl = 'Images/'+req.file.filename
        pm.update(id,name,desc,price,imgurl)
        let products = pm.getProduct()
        res.render('products',{products:products, userEmail:req.session.userEmail})
    }

    // To add a new product details and render products view
    postAddProduct(req,res){
        const {name,desc,price} = req.body
        const imgurl = 'Images/'+req.file.filename

        pm.add(name,desc,price,imgurl)
        let products = pm.getProduct()
        res.render('products',{products:products, userEmail:req.session.userEmail})
    }
}
// ------------------------------------------------------------------------------------------------
