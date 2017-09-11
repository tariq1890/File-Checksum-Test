const checksum = require('checksum');
const fs = require('fs');
const crypto = require('crypto');

options = {
    algorithm: 'sha256'
};

checksum.file('brokenage-hero.png', options, function (err, sum) {
    console.log("Generated checksum from checksum library:", sum);
});

fs.readFile('brokenage-hero.png', function (err, data) {
    console.log("Generated checksum 2 : ", calcChecksum2(data))
});

calcChecksum3('brokenage-hero.png');

function calcChecksum2 (str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'sha256')
        .update(str, 'utf8')
        .digest(encoding || 'hex')
}

function calcChecksum3(path) {
    const filestream = fs.createReadStream(path);
    const hash = crypto.createHash('sha256');
    //filestream.setEncoding('utf8');
    filestream.on('data', function(data){
           hash.update(data)
    });
    filestream.on('end', function () {
        console.log("Checksum from method 3 : ", hash.digest('hex'))
    })
}

//Results
//Generated checksum 2 :  909a88f7db95987bdd10905ab48602b158b67ce6f2edbf78fe9631f39fb2dfa5
//Generated checksum from checksum library: 909a88f7db95987bdd10905ab48602b158b67ce6f2edbf78fe9631f39fb2dfa5
//Checksum from method 3 :  909a88f7db95987bdd10905ab48602b158b67ce6f2edbf78fe9631f39fb2dfa5