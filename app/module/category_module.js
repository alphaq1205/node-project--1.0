class category_data{

    table_data(){
        const mongo=require('mongodb').MongoClient
        const prmis=new Promise(function(resolve,reject){   
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('category_db').find({},function(error,result){
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

    add_category(parent_name,category_name,category_discription,category_active,active_date){
        let prmis=new Promise(function(resolve,reject){
        const mongo=require('mongodb').MongoClient
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('olxpro')
            db.collection('category_db').findOne({category:parent_name},function(error,result){
                if(result!=null){
                    db.collection('category_db').insertOne({category: category_name, parent_category: parent_name, 
                        discription: category_discription, is_active:category_active,added_on:active_date},function(error,rslt){
                        resolve()
                    })
                }else{
                    db.collection('category_db').insertOne({category: category_name, parent_category: '', 
                        discription: category_discription, is_active:category_active,added_on:active_date},function(error,rslt){
                        reject()
                    })
                }
            })
        })
    })
    return prmis
}

    
    category_edit_data(edit_id){
        let prmis=new Promise(function(resolve,reject){
        const mongo=require('mongodb').MongoClient
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                db.collection('category_db').find({},function(error,result){
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



update_category_data(varified_id,update_edited_data){
    let prmis=new Promise(function(resolve,reject){
    let mongo=require('mongodb').MongoClient
    mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
        let db=data.db('olxpro')
        db.collection('category_db').find({},function(error,result){
            result.forEach(element => {
                if(varified_id==element._id){
                db.collection('category_db').updateOne({
                    
                    category:element.category,
                    parent_category:element.parent_category,
                    discription :element.discription,
                    is_active:element.is_active,
                added_on:element.added_on},{$set: update_edited_data},function(error,rslt){
                    resolve()
                })
            }
            })
        })
    })
})
return prmis
}


delete_category_data(delete_id){
    var prmis=new Promise(function(resolve,reject){
        let mongo=require('mongodb').MongoClient
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('olxpro')
            db.collection('category_db').findOne({_id:delete_id},function(error,result){
                if(result!=null){
                    console.log('..........'+typeOf(result._id))
                    db.collection('category_db').remove({_id:delete_id},(error,daata)=>{;
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




filter_category_data(filter_name){
    let prmis=new Promise(function(resolve,reject){
    const mongo=require('mongodb').MongoClient
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('olxpro')
            db.collection('category_db').find({},function(error,result){
                let filtered_data=[]
                result.forEach(element => {
                    if(element.category==filter_name){
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
module.exports=category_data