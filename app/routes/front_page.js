const myModule= require('../config/Require_module')

myModule.router.get('/',function(req,res){

    const isSetCookies= req.cookies["login_key"] 
    console.log(isSetCookies)
    
    if(isSetCookies ){
        console.log('cookie is not saved')
        res.render('error_page')
    }else{
        res.render('front_page')
    }
})
module.exports=myModule.router