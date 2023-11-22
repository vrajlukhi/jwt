const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    let cookie = req.cookies()
    if (cookie) {
        let decoded = jwt.verify(token, 'the');
        res.send("done")
        console.log(decoded);
    }
    else{
        res.send("you are not authorize")
    }
}
module.exports={auth}