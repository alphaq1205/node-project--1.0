const myModule=require('../config/Require_module')


myModule.router.use(myModule.bodyParser.urlencoded({ extended: false }))
myModule.router.use(myModule.bodyParser.json())


myModule.router.get('/product_table',function(req,res){
    const isSetCookies= req.cookies["login_key"] 
    if(isSetCookies != undefined){
        myModule.productModule.product_data().then(function(solve){
            res.render('product_table',{product_data:solve})
        }).catch(function(faile){
            console.log('not getting data')
        })
   }else{
       res.redirect('/')
   }
})





myModule.router.get('/add_product',function(req,res){
    const isSetCookies= req.cookies["login_key"] 
    if(isSetCookies != undefined){
        var customer_id,category_name
        myModule.customerModule.customer_table_data().then(function(solve){
            customer_id=solve
        })
        
        myModule.productModule.sub_category_data().then(function(solve_two){
            
            
            category_name=solve_two
            
        }).then(function(rendr){
            res.render('product_add',{parent_cutomer_id:customer_id,parent_category_data:category_name})
        }).catch(function(fail){
            console.log('.........cannot show data................')
        })
   }else{
       res.redirect('/')
   }
})






myModule.router.post('/add_product',myModule.upload.single('image_pro'),function(req,res){
    var fileinfo = req.file
        myModule.productModule.add_product({
            Product_name:req.body.name_pro,
            Parent_category:req.body.cat_id_pro,
            Added_by:req.body.category_pro,
            Location:req.body.location,
            Added_on:req.body.addedOn,
            Acitve:req.body.isActive,
            image_name:fileinfo.originalname
        }).then(function(solve){
            res.redirect('/product_table')
        }).catch(function(fail){
            console.log('.........this product already exists..........')
        })
  })




  

myModule.router.post('/product_table',function(req,res){
    var product_edit,customer_id,category_name
    console.log(req.body.edit_pro)
    
    myModule.customerModule.customer_table_data().then(function(solve_one){
        customer_id=solve_one
    }).catch(function(faiil){
        console.log('not geting customer id data.........>>>>>>>>>>>>>>')
    })

    myModule.productModule.sub_category_data().then(function(solve_two){
        category_name=solve_two
        
    })
    
    myModule.productModule.product_edit_data(req.body.edit_pro).then(function(solve){
        product_edit=solve
    }).then(function(solve_three){
        res.render('product_edit',{parent_cutomer_id:customer_id,parent_category_data:category_name,get_product_data:product_edit})
    }).catch(function(faile){
        console.log('............ssssssssssssssssssssssssssss................')
    })


})




    myModule.router.post('/edit_product',function(req,res){
        myModule.productModule.update_product_data(req.body.id_pro,{ 
            Product_name : req.body.name_pro, 
            Added_on : req.body.addedOn, 
            Location : req.body.location, 
            Parent_category : req.body.category_pro, 
            Added_by : req.body.cat_id_pro, 
            }).then(function(solve){
                res.redirect('/product_table')
                
            }).catch(function(fail){
                res.redirect('/product_table')
                console.log('update  not succeded tyr again')
            
            })
    })
    



    /*myModule.router.post('/delete_product_data',function(req,res){
        console.log(req.body.delete_product)
        myModule.productModule.delete_product_data(req.body.delete_product).then(function(solve){
            console.log(solve)
            res.redirect('/product_table')
        }).catch(function(fail){
            console.log(fail)
            res.redirect('/product_table')
        })
    })*/

    

    myModule.router.post('/delete_product_data',function(req,res){
        console.log(req.body.delete_product)
        myModule.productModule.delete_product_data(req.body.delete_product).then(function(solve){
            console.log(solve)
            res.redirect('/product_table')
        }).catch(function(fail){
            console.log(fail)
            res.redirect('/product_table')
        })
    })
    
    

    myModule.router.post('/product_filter',function(req,res){
        myModule.productModule.filter_product_data(req.body.filter).then(function(solve){
            res.render('product_filter',{filter_data:solve})
            }).catch(function(fail){
            res.send('searched result not found')
        })
    })
    
    
    module.exports=myModule.router
