const myModule=require('../config/Require_module')

myModule.router.use(myModule.bodyParser.urlencoded({ extended: false }))
myModule.router.use(myModule.bodyParser.json())

myModule.router.get('/test',function(req,res){
    res.render('test_form')
})
myModule.router.post('/test_upload',myModule.upload.single('testimage'),function(req,res,next){
    var fileinfo = req.file
    var title = req.body.title
    console.log(title)
    res.send(fileinfo.originalname)
})
module.exports = myModule.router