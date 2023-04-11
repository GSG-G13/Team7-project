
const jwt = require('jsonwebtoken');
const hashingFun = (notHashed,key) => {
    return new Promise((resolve,reject)=>{
        let result ;
        jwt.sign(notHashed,key,(err,hashed)=>{
           if (err) {
               reject(err)
           } else {
            resolve(hashed)
               
           }
       });
    })
}
module.exports = {hashingFun}