// Middleware for validating data which user is entering
// ------------------------------------------------------------------------------------------------

import { body , validationResult } from 'express-validator'

const validateRequest = async (req,res,next)=>{  

        const rules = [
            body('name').notEmpty().withMessage('Name is invalid'),
            body('price').isFloat({gt:0}).withMessage('Price is invalid'),
            body('desc').notEmpty().withMessage('Description is required'),
            body('imgurl').custom((value,{req})=>{ //if we are using input type file in form data
                if(!req.file){
                    throw new Error('Image is required');
                }
                return true;
            })
        ]

        await Promise.all(
            rules.map((rule)=> rule.run(req))
        )

        var validationErrors = validationResult(req);

        if(!validationErrors.isEmpty()){
            return res.render('new-product',{
                errormessage: validationErrors.array()[0].msg,
            })
        }
        
        next();

}

export default validateRequest
// ------------------------------------------------------------------------------------------------