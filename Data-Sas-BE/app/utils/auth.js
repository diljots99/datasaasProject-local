var jwt = require('jsonwebtoken');
const accessTokenSecret = 'my_secrect_key';
/*
AUTH FOR COMMON JWT
*/
module.exports.authenticate = function (req, res, next) {
	var bearerHeader = req.headers['authorization'];
	var token;
	req.authenticated = false;
	if (bearerHeader) {
		var bearer = bearerHeader.split(" ");
		token = bearer[1];
		jwt.verify(token, accessTokenSecret, function (err, decoded) {
			if (err) {
				console.log(err);
				req.authenticated = false;
				req.decoded = null;
				if (err && err.name === 'TokenExpiredError')
					return res.status(401).send({
						code: 'TokenExpiredError',
						message: 'Token expired.'
					})
				if (err && err.name === 'JsonWebTokenError') {
					return res.status(401).send({
						code: 'JsonWebTokenError',
						message: 'invalid token'
					})
				}
				/**
				 * If the token is invalid, send 401.
				 */
				if (err && err.name != 'TokenExpiredError')
					return res.status(401).send({
						message: 'Failed to authenticate token.'
					})
			} else {
				req.decoded = decoded;
				req.authenticated = true;
				next();
			}
		});
	} else {
		res.sendStatus(401);
	}
}