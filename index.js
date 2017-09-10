var checksum = require('checksum');

checksum.file('destiny_2.jpg', function (err, sum) {
    console.log("Generated checksum from checksum package:", sum);
});

