const logger = (req,res,next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // either you res.send() or next() when using middlewares otherwise error
    next();
}

module.exports = logger;