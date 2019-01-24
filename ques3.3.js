
var fs = require('fs');
fs.appendFile('ukinode.txt','Uki is a proud joint initiative by Yarl IT Hub and SERVE Foundation as an effort to provide an alternative opportunity for students who were not able to continue tertiary or vocational education to have a successful carrier in the IT industry',
function (err){
 if (err) throw err;
 console.log('Updated!');
});
