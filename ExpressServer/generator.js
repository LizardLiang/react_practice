const rsa = require('node-rsa')
const fs = require('fs')

function GenerateKey() {
    let key = new rsa().generateKeyPair()

    let publickey = key.exportKey("public")
    let privatekey = key.exportKey("private")

    fs.openSync('./ExpressServer/public.pem', "w")
    fs.writeFileSync('./ExpressServer/public.pem', publickey, 'utf8')

    fs.openSync('./ExpressServer/private.pem', "w")
    fs.writeFileSync('./ExpressServer/private.pem', privatekey, 'utf8')
}

GenerateKey()
