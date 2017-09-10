const checksum = require('checksum');
const fs = require('fs');
const crypto = require('crypto');

checksum.file('destiny_2.jpg', function (err, sum) {
    console.log("Generated checksum from checksum library:", sum);
});

fs.readFile('destiny_2.jpg', function (err, data) {
    console.log("Genereated checksum 2 : ", calcChecksum2('destiny_2.jpg'))
});

calcChecksum3('destiny_2.jpg');

function calcChecksum2 (str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex')
}

function calcChecksum3(path) {
    const filestream = fs.createReadStream(path);
    const hash = crypto.createHash('sha256');
    filestream.setEncoding('utf8');
    filestream.on('data', function(data){
           hash.update(data, 'utf8')
    });
    filestream.on('end', function () {
        console.log("Checksum from method 3 : ", hash.digest('hex'))
    })
}