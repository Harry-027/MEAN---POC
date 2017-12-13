var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');

var app = express();

var secret = 'Argus';

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/address', function (req, res, next) {
    res.json({ msg: 'Address Works!!' })
})

app.get('/dependent', function (req, res, next) {
    res.json({ msg: 'Dependent Works!!' })
})

app.post('/auth', function (req, res, next) {

    if (req.body && req.body.name && req.body.password) {

        if (comparePassword(req.body.password)) {
            console.log(req.body);

            const payload = {
                admin: req.body.name
            };
            var token = jwt.sign(payload, secret);
            res.json({
                success: true,
                msg: 'Token received from server end !!',
                token: token
            });

        } else {
            res.json({ msg: 'Password was incorrect !!' })
        }
    } else {
        res.json({ msg: 'Authentication failed !!' })
    }

})

app.get('/validate', function (req, res, next) {


    if (req.headers && req.headers.authorization) {

        let token = req.headers.authorization;

        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                res.json({ msg: 'Token Authentication failed !!' })
            } else if (decoded.admin) {
                res.json({ msg: 'JWT validation successfull !!' })
            }
        });
    }

});

app.listen(3000, function () {
    console.log('Server is active on port 3000')
})

comparePassword = function (pass) {
    if (pass == 'pass') {
        return true;
    }
    return false;
}

