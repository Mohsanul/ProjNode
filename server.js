var http = require('http'); // Importing the http package

var fs = require('fs');

http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});

  if(req.url === '/') {

    fs.readFile('index.html', (err, data) => {

      res.end(data.toString());

    })

  }
  else if(req.url === '/sign.html') {

    fs.readFile('sign.html', (err, data) => {

        res.end(data.toString());

      })
    }
  else if(req.url === '/html.html') {
    fs.readFile('html.html', (err, data) => {
        res.end(data.toString());
      })
    }
    else if(req.url === '/css.html') {
        fs.readFile('css.html', (err, data) => {
            res.end(data.toString());
          })
        }
        else if(req.url === '/javasc.html') {
            fs.readFile('javasc.html', (err, data) => {       
                res.end(data.toString());
              })
            }
            else if(req.url === '/node.html') {
              fs.readFile('node.html', (err, data) => {
                  res.end(data.toString());
                })
              }
   else {
    res.end("<h1>Error 404 Page not Found</h1>")
  }
}).listen(process.env.PORT || 5000);