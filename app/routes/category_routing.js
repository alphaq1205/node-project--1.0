
const myModule=require('../config/Require_module')



myModule.router.use(myModule.bodyParser.urlencoded({ extended: false }))
myModule.router.use(myModule.bodyParser.json())


myModule.router.get('/category_table',function(req,res){
    const isSetCookies= req.cookies["login_key"] 
    if(isSetCookies != undefined){
        myModule.categoryModule.table_data().then(function(solve){
            res.render('category_table',{result_data:solve})
        }).catch(function(fail){
            console.log('not getting data')
        })
   }else{
       res.redirect('/')
   }
   
})


myModule.router.get('/add_category',function(req,res){
    const isSetCookies= req.cookies["login_key"] 
    if(isSetCookies != undefined){
        myModule.categoryModule.table_data().then(function(solve){
            res.render('CategoryAdd',{get_category_data:solve})
        }).catch(function(fail){
            console.log('not getting data')
        })
       
   }else{
       res.redirect('/')
   }
})


myModule.router.post('/add_category',function(req,res){  

    myModule.categoryModule.add_category(
        req.body.parent_cat,
        req.body.name_cat,
        req.body.discription_cat,
        req.body.isActive,
        req.body.cat_active_data).then(function(solve){
            res.redirect('/category_table')
        
    }).catch(function(fail){
        res.redirect('/category_table')
        
    })

})



myModule.router.post('/table',function(req,res){
    
    var edit_data,category_name
    myModule.categoryModule.table_data().then(function(solve_one){
        category_name=solve_one
        
    }).catch(function(fail){
        res.redirect('/category_table')
    })

    myModule.categoryModule.category_edit_data(req.body.edit).then(function(solve_two){
        edit_data=solve_two
        
    }).then(function(rndr){
        res.render('categoryEdit',{get_category_data:category_name,category_edit_data:edit_data})
    }).catch(function(fail){
        console.log('not getting data')
    })

})




        myModule.router.post('/edit_category',function(req,res){
            myModule.categoryModule.update_category_data(
                req.body.id_cat,
                { category: req.body.name_cat,
                 parent_category: req.body.parent_cat, 
                discription: req.body.discription_cat,
                 is_active:req.body.isActive,
                added_on:req.body.cat_date}).then(function(solve){
                    res.redirect('/category_table')
                    
                }).catch(function(fail){
                    res.redirect('/category_table')
                    console.log('update  not sucessed tyr again')
                
                })
        })
        
myModule.router.post('/delete_cat',function(req,res){
    console.log('....................'+typeof(req.body.delete_category))
    myModule.categoryModule.delete_category_data(req.body.delete_category).then(function(solve){
        console.log(solve)
        res.redirect('/category_table')
    }).catch(function(fail){
        console.log(fail)
        res.redirect('/category_table')
    })
})



    



myModule.router.post('/category_filter',function(req,res){
    myModule.categoryModule.filter_category_data(req.body.filter).then(function(solve){
        res.render('category_filter',{filter_data:solve})
        }).catch(function(fail){
        res.send('searched result not found')
    })
})
module.exports=myModule.router
