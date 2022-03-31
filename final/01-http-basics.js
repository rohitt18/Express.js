// HTTP response status codes
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

const http = require("http");

// every time user hits the server, we have access to req & res
const server = http.createServer((req, res) => {
    // console.log(req.method); // property
    // console.log(req.url);   // property
    const url = req.url;
    // home page
    if(url === '/'){
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>home page</h1>");
        res.end();    
    }
    // about page
    else if(url === '/about'){
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>about page</h1>");
        res.end(); 
    }
    // 404
    else{
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>page not found</h1>");
        res.end(); 
    }
});
server.listen(5000);
