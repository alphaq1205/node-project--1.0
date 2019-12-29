


class adminstration_data {
    login_check(user_id,user_pass){
        let uniq=''
        let prmis=new Promise(function(resolve,reject){
            let mongo=require('mongodb').MongoClient
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('olxpro')
                 db.collection('admin_db').findOne({username:user_id,password:user_pass},function(error,result){
                if(result!=null){
                    resolve('result is not null')
                }else{
                    reject('result is null')
                }
            })
        })
    })
    return prmis
    }
     
    
    unique_key(){
        let date=new Date()
        let key=''
        return key=Math.random()+date.getTime()
    }
}
    module.exports=adminstration_data