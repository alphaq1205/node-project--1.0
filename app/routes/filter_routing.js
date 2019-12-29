const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
let require_course_data=require('../module/filter_module')

router.post('/filter',function(req,res){
    require_course_data.filter_data(req.body.filter).then(function(solve){
        console.log(solve)
        res.render('filter',{filter_data:solve})
       // res.redirect('/filter')
    }).catch(function(fail){
        res.send('searched result not found')
    })
})
module.exports=router