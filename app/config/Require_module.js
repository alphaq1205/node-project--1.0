const express = require('express');
const app = express();
const router=express.Router()
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const request = require("request")
var adminModule = require('../module/admin_module')
var customerModule = require('../module/coustmer_module')
var productModule = require('../module/product_module')
var categoryModule = require('../module/category_module')
const multer=require('multer')
var  storagee = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})
var upload = multer({storage:storagee })


var adminModule = new adminModule()
var customerModule = new customerModule()
var productModule = new productModule()
var categoryModule = new categoryModule()

module.exports.express=express;
module.exports.app = app;
module.exports.router=router
module.exports.cookieParser = cookieParser
module.exports.bodyParser = bodyParser
module.exports.request = request
module.exports.crypto = crypto

module.exports.upload= upload

module.exports.adminModule=adminModule
module.exports.customerModule=customerModule
module.exports.productModule=productModule
module.exports.categoryModule=categoryModule
