

class customer_data{

    customer_table_data(){
        const mongo=require('mongodb').MongoClient
        const prmis=new Promise(function(resolve,reject){   
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('customer_db').find({},function(error,result){
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



        add_customer(add_course_data){
            let prmis=new Promise(function(resolve,reject){
            let mongo=require('mongodb').MongoClient
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('customer_db').insertOne(add_course_data,function(error,rslt){
                            resolve()
                        })
                    
                })
            })
        
        return prmis
        }
    
        
        customer_edit_data(edit_id){
            let prmis=new Promise(function(resolve,reject){
            const mongo=require('mongodb').MongoClient
                mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                    let db=data.db('olxpro')
                    db.collection('customer_db').find({},function(error,result){
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
    
        update_customer_data(varified_id,update_edited_data){
            let prmis=new Promise(function(resolve,reject){
            let mongo=require('mongodb').MongoClient
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('customer_db').find({},function(error,result){
                    result.forEach(element => {
                        if(varified_id==element._id){
                        db.collection('customer_db').updateOne({  
                            customer_name : element.customer_name, 
                            email : element.email, 
                            status: element.status,
                            added_on: element.added_on
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
    
        delete_customer_data(delete_id){
            var prmis=new Promise(function(resolve,reject){
                let mongo=require('mongodb').MongoClient
                mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                    let db=data.db('olxpro')
                    db.collection('customer_db').findOne({_id:delete_id},function(error,result){
                        if(result!=null){
                            db.collection('customer_db').remove({_id:delete_id},(error,daata)=>{;
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
    
    


        filter_customer_data(filter_name){
            let prmis=new Promise(function(resolve,reject){
            const mongo=require('mongodb').MongoClient
                mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                    let db=data.db('olxpro')
                    db.collection('customer_db').find({},function(error,result){
                        let filtered_data=[]
                        result.forEach(element => {
                            if(element.first_name==filter_name){
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
module.exports=customer_data