const bcrypt = require('bcrypt');

const hashingFun =  (notHashed,cb) => {
    bcrypt.hash(notHashed,10,cb)
}
module.exports = {
    hashingFun
}




