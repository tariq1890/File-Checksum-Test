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
//Genereated checksum 2 :  f66318024c525e2f4719af8d3c4f4738
//Checksum from method 3 :  8acbe571868f119520f00eb32631d098f55f5a0ddac1f62f11f592e0df78c10b
//Generated checksum from checksum library: 8c2075377026ba3aec5bc5b573908b54a01e5800