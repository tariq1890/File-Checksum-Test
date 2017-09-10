const checksum = require('checksum');
const fs = require('fs');
const crypto = require('crypto');

checksum.file('destiny_2.jpg', function (err, sum) {
    console.log("Generated checksum from checksum package:", sum);
});

fs.readFile('destiny_2.jpg', function (err, data) {
    console.log("Genereated checksum 2 : ", calcChecksum('destiny_2.jpg'))
});


function calcChecksum (str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex')
}