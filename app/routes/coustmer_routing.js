const myModule=require('../config/Require_module')

myModule.router.use(myModule.bodyParser.urlencoded({ extended: false }))
myModule.router.use(myModule.bodyParser.json())



myModule.router.get('/customer_table',function(req,res){
    const isSetCookies= req.cookies["login_key"] 
    if(isSetCookies != undefined){
        myModule.customerModule.customer_table_data().then(function(solve){
            res.render('customer_table',{result_data:solve})
        }).catch(function(fail){
            console.log('not getting data')
        })
   }else{
       res.redirect('/')
   }
   
})


myModule.router.get('/add_customer',function(req,res){
    const isSetCookies= req.cookies["login_key"] 
    if(isSetCookies != undefined){

        res.render('customer_add',{msg:''})
       
   }else{
       res.redirect('/')
   }
})



myModule.router.post('/add_customer',function(req,res){  

    let secret='alphaq'
    let hash=myModule.crypto.createHmac('sha256',secret).update(req.body.pass_cust).digest('hex')
    

    myModule.customerModule.add_customer({ 
        customer_name : req.body.name_cust, 
        email : req.body.email_cust, 
        customer_password: hash,
        status: req.body.isActive,
        added_on: req.body.cat_active_date
        }).then(function(solve){
            res.redirect('/customer_table')
        }).catch(function(fail){
            res.render('customer_add',{msg:'this customer already exists'})
        })

})





myModule.router.post('/customer_table',function(req,res){
    myModule.customerModule.customer_edit_data(req.body.edit).then(function(solve){
        console.log(req.body.edit)
        res.render('customer_edit',{get_customer_data:solve})
    }).catch(function(fail){
        console.log('.......edit module failed.........')
    })
})

myModule.router.post('/edit_customer',function(req,res){
    myModule.customerModule.update_customer_data(req.body.id_cust,{
        customer_name : req.body.name_cust, 
        email : req.body.email_cust, 
        status: req.body.isActive,
        added_on: req.body.cat_active_date
        
        }).then(function(solve){
            res.redirect('/customer_table')
            
        }).catch(function(fail){
            res.redirect('/customer_table')
            console.log('update  not sucessed tyr again')
        
        })
})

myModule.router.post('/delete_customer_data',function(req,res){
    console.log(req.body.delete_customer)
    myModule.customerModule.delete_customer_data(req.body.delete_customer).then(function(solve){
        console.log(solve)
        res.redirect('/customer_table')
    }).catch(function(fail){
        console.log(fail)
        res.redirect('/customer_table')
    })
})



myModule.router.post('/customer_filter',function(req,res){
    
    myModule.customerModule.filter_customer_data(req.body.filter).then(function(solve){
        
        res.render('customer_filter',{filter_data:solve})
        
       
    }).catch(function(fail){
        res.send('searched result not found')
    })
})


module.exports=myModule.router
















