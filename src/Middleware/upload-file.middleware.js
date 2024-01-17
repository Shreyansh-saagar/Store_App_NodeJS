// Middleware for upload image file to server using multer
// ------------------------------------------------------------------------------------------------

import multer from 'multer';

const storagePlace = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Public/Images/")
    },
    filename:(req,file,cb)=>{
        const name = Date.now()+"-"+file.originalname;
        cb(null,name);
    }
})

export const uploadFile = multer({
    storage: storagePlace
})

// ------------------------------------------------------------------------------------------------