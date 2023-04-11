const hashKey = process.env.PSC;
const jwt = require('jsonwebtoken');


// const verifyFun = (token,key) =>{
//     jwt.verify(token,key,(err, verification)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             return verification;
//         }
//     })
// }
