const plainpassword = 'password';

var colors = require('colors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(plainpassword, salt, function(err, hash) {
      console.log(hash.blue);
        // Store hash in your password DB.
    });
});