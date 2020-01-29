//const Membership = require('../model/membership');
const generateToken = require('../jwt/jwt');


const login = function (membershipRepository) {
    return function (req, res, next) {
        let email = req.body.email;
        let password = req.body.password;

        membershipRepository.findByEmail(email, (err, result) => {
            if (err) {
                return res.status(401).send("Invalid username or password");
            }

            if (!result.isValidPassword(password)) {
                return res.status(401).send("Invalid username or password");
            }

            generateToken({ memberId: result.id }, 60 * 5, (err, token) => {
                if (err) {
                    return res.status(401).send("Invalid username or password");
                }

                res.json({ 'accessToken': token });
            });
        });
    }
};

module.exports = {
    login: login
}