function filter_data(user_filter){
    let prmis=new Promise(function(resolve,reject){
    const mongo=require('mongodb').MongoClient
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('mongo_db')
            db.collection('test').find({},function(error,result){
                let filtered_data=[]
                result.forEach(element => {
                    if(element.name==user_filter){
                        filtered_data.push(element)
                    }else{
                        console.log("<h1>searched result not found</h1>")
                    }
                  },function(){
                    resolve(filtered_data)
                })
        })
    })
})
return prmis
}
module.exports.filter_data=filter_data