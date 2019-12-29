class product{

    product_data(){
        const mongo=require('mongodb').MongoClient
        const prmis=new Promise(function(resolve,reject){
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('product_db').find({},function(error,result){
                    let element_data=[]
    
                    result.forEach(element => {
                      element_data.push(element)
                    },function(){       
                        resolve(element_data)
                    })
                })
            })
        })
        return prmis
    }

add_product(add_product_data){
    let prmis=new Promise(function(resolve,reject){
        let mongo=require('mongodb').MongoClient
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('olxpro')
            
                    db.collection('product_db').insertOne(add_product_data,function(error,rslt){
                        resolve()
                    })
            })
        })
    
    return prmis
}

sub_category_data(){
    const mongo=require('mongodb').MongoClient
    const prmis=new Promise(function(resolve,reject){   
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('olxpro')
            db.collection('category_db').find({},function(error,result){
                let element_data=[]

                result.forEach(element => {
                  if(element.parent_category!=''){
                      element_data.push(element.category)
                  }
                },function(){
                    resolve(element_data)
                })
            })
        })
    })
    return prmis
}

    

    product_edit_data(edit_id){
        let prmis=new Promise(function(resolve,reject){
        const mongo=require('mongodb').MongoClient
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('product_db').find({},function(error,result){
                    let get_edit_data=[]
                    result.forEach(element => {
                        if(element._id==edit_id){
                            get_edit_data.push(element)
                        }
                    },function(){
                        resolve(get_edit_data)
                    })
            })
        })
    })
    return prmis
    }


    update_product_data(varified_id,update_edited_data){
        let prmis=new Promise(function(resolve,reject){
        let mongo=require('mongodb').MongoClient
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('olxpro')
            db.collection('product_db').find({},function(error,result){
                result.forEach(element => {
                    if(varified_id==element._id){
                    db.collection('product_db').updateOne({ 
                        Product_name : element.Product_name, 
                        Added_on : element.Added_on, 
                        Location : element.Location, 
                        Parent_category : element.Parent_category, 
                        Added_by : element.Added_by, 
                        },{$set: update_edited_data},function(error,rslt){
                        resolve()
                    })
                }
                })
            })
        })
    })
    return prmis
    }


    delete_product_data(delete_id){
        var prmis=new Promise(function(resolve,reject){
            let mongo=require('mongodb').MongoClient
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('product_db').findOne({Product_id:delete_id},function(error,result){
                    if(result!=null){
                        db.collection('product_db').remove({Product_id:delete_id},(error,daata)=>{;
                            resolve('............can be deleted..........')
                        })
                        
                    }else{
                        reject('..............cannot be deleted.........')
                    }
                })
            })
        })
        return prmis
    }




    filter_product_data(filter_name){
        let prmis=new Promise(function(resolve,reject){
        const mongo=require('mongodb').MongoClient
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('product_db').find({},function(error,result){
                    let filtered_data=[]
                    result.forEach(element => {
                        if(element.Product_name==filter_name){
                            filtered_data.push(element)
                        }
                      },function(){
                        resolve(filtered_data)
                    })
            })
        })
    })
    return prmis
    }


}
module.exports=product
