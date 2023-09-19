const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200,{'contant-Type' : 'text/html'})
        res.write(data)
        res.write(req.url)
        res.end("Hello , buddy!")
        res.write(data)
    })
   
}).listen(9000,(req, res) => {
    console.log("Server listening on port 9000")
}) 

