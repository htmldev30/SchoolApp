const jwt = require('jsonwebtoken')

// Code Adapted fom https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
// Author: Idris Olubisi
const verifyToken = (req, res, next) => {
    // getting JWT Token from the request headers
    const jwtToken = req.headers.authorization.split(' ')[1]
    if (!jwtToken) {
        return res.status(403).send('A token is required for authentication')
    }
    try {
        const decodedUser = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        req.user = decodedUser
    } catch (err) {
        return res.status(401).send('Invalid Token')
    }
    return next()
}

module.exports = verifyToken
