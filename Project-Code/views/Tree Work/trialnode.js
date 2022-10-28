const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tree Visualization</title>
      <link rel="stylesheet" href="tree.css">
      <script src="libraries/p5.min.js"></script>
      <script src="libraries/p5.sound.min.js"></script>
      <style>
          .container{
              background-color: thistle;
              border: 2px solid red;
              margin-left: 700px;
              margin-top: 10px;
              margin-right: 10px;
              padding: 5px;
              width: 25%;
          }
          .btn{
              color: black;
              background-color: cornflowerblue;
              border: crimson solid 2px;
              padding: auto;
          }
          a{
              text-decoration: none;
          }
          a:hover{
              background-color: darkcyan;
          }
          a:visited{
              color:blue;
          }
      </style>
  </head>
  <body bgcolor="wheat">
      <div class="nav-bar" id="navigation">
          <h1 style="margin-right: 16px;">
              Binary Search Tree Visualizer
          </h1>
      </div>
      <br><br><br>
          <div class="card-container">
              <div class="card">
                  <div class="card-head">
                      Time Complexity</div>
                  <div id="complexity" class="innerCard">
                      <pre style="font-size: 1rem;color:rgb(255, 255, 255);margin-top: 3rem;font-size: 1.0rem;margin-left: 25px;line-height: 30px;
      ">insert(): O(height)<br>search(): O(height)</pre>
                  </div>
              </div>
          <div class="card">
              <div class="card-head">
                  Operations</div>
              <div id="complexity" class="innerCard">
                  <!-- Length: <input type="number" name="length" id="len"><br>
                  Range: &nbsp;<input type="number" name="range" id="ran"><br> -->
                  <button type="button"  class="btn" onclick="setup3()">CREATE A RANDOM TREE</button> 
                  <button type="button"  class="btn" onclick="setup1()">SEARCH A NODE</button> 
                  <button type="button"  class="btn" onclick="setup2()">INORDER TRAVERSAL</button> 
              </div>
          </div>
          <div class="card">
              <div class="card-head">
                  Status</div>
              <div id="complexity" class="innerCard">
                  <!-- <pre style="font-size: 1rem;color:rgb(255, 255, 255);margin-top: 3rem;font-size: 1.1rem;margin-left: 32px;line-height: 30px;">Status -->
                      <pre id="status"></pre>
                  </pre>
              </div>
          </div>
          
          
      </div><br><br>
          <script src="sketch.js"></script>
          <script src="tree.js"></script>
          <script src="nodeCode.js"></script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});