
const myModule= require('../config/Require_module')


myModule.router.use(myModule.bodyParser.urlencoded({ extended: false }))
myModule.router.use(myModule.bodyParser.json())


myModule.router.get('/',function(req,res){
    const isSetCookies= req.cookies["login_key"] 
    if(isSetCookies != undefined){
   res.redirect('/category_table')
    
    }else{
        res.render('login_page',{message:''})
    }
})

myModule.router.post('/',function(req,res){
    let secret='alphaq'
    let hash=myModule.crypto.createHmac('sha256',secret).update(req.body.p_word).digest('hex')
    


    myModule.adminModule.login_check(req.body.u_name,req.body.p_word).then(function(solve){
        res.cookie('login_key',myModule.adminModule.unique_key()).redirect('/category_table')
        console.log(solve)
    }).catch(function(fail){
        res.render('login_page',{message:'USERNAME OR PASSWORD IS NOT CORRECT TRY AGAIN'})
        console.log(fail)
    })
   /*  myModule.adminModule.login_check(req.body.u_name,hash).then(function(solve){
        res.cookie('login_key',myModule.adminModule.unique_key()).redirect('/category_table')
        console.log(solve)
    }).catch(function(fail){
        res.render('login_page',{message:'USERNAME OR PASSWORD IS NOT CORRECT TRY AGAIN'})
        console.log(fail)
    }) */
    
})

myModule.router.get('/logout',(req,res)=>{
    res.clearCookie("login_key")
    res.redirect("/")
})


module.exports=myModule.router