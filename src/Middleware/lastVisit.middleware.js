// Middleware to store user last visit to portal 
// ------------------------------------------------------------------------------------------------

export const lastVisit = (req,res,next)=>{

    // if cookie is set , then add a local var with last visit time
    if(req.cookies.lastVisit){
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString()
    }
    res.cookie('lastVisit',new Date().toISOString(),{
        maxAge: 2*24*60*60*1000
    });
    next();
}
// ------------------------------------------------------------------------------------------------

// to clear cookie 
// -> res.clearCookie('lastVisit')