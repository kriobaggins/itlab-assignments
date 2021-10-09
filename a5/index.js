const { MongoClient } = require('mongodb');
const http = require('http');
const fs = require('fs');

const client = new MongoClient('mongodb+srv://smc:passwd%40123@smc-cluster.noub5.mongodb.net/test?authSource=admin&replicaSet=atlas-wwuok8-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useUnifiedTopology: true })

async function getApiHandler(req, res) {

  // NOTE: The approach practiced in the lab practice sessions 
  // is old syntax. Following the new documentation, I used this below syntax
  // 
  try {
    await client.connect();

    const db = client.db("assign5db");
    const assign5collection = db.collection("assign5collection");

    const query = { };

    const cursor = assign5collection.find(query);

    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }

    const data = await cursor.toArray();


    if (req.url === "/") {
      fs.readFile(__dirname + "/public" + req.url + "index.html" , function (_, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
      });
    }
    else if (req.url === '/api' && req.method === "GET") {
      res.writeHeader(200, {"Content-Type": "application/json"});
      res.write(JSON.stringify(data))
      res.end()
    }
    // Below is the regex to match all strings other than 
    // those ending with .[file extension]
    // https://regex101.com/r/i3kAHs/1
    else if (req.url.match(/^\/.*(?<!(\..*))$/)) {
      fs.readFile(__dirname + "/public" + req.url + "/index.html" , function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        console.log(req.url)
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
      });
    } else {
      fs.readFile(__dirname + "/public" + req.url, function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
    }
  } finally {
    await client.close();
  }
}

// expose the server on port 7080
http.createServer((req, res) => getApiHandler(req, res).catch(console.dir)).listen("7080")
