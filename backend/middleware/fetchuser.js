const jwt = require('jsonwebtoken');
const JWT_SECRET = 'rishabh';
const fetchuser=(req,res,next)=>{
    const tocken = req.header("auth-tocken");
    if(!tocken){
        res.staus(401).send({error:"fillled correct details"});

    }
    try {
        const data = jwt.verify(tocken,JWT_SECRET);
        req.user =data.user;
        next();
    } catch{
        res.staus(404).send("server error");
        
    }
}
module.exports = fetchuser;