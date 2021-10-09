const { MongoClient } = require('mongodb');
const http = require('http');
const fs = require('fs');

const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true })

async function getApiHandler(req, res) {

  // NOTE: The approach we used in the class is 
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


    if (req.url == "/") {
      fs.readFile(__dirname + "/public/index.html" , function (_, data) {
        res.writeHead(301, {Location: "/index.html"});
        res.end(data);
      });
    }
    else if (req.url === '/api' && req.method === "GET") {
      res.writeHeader(200, {"Content-Type": "application/json"});
      res.write(JSON.stringify(data))
      res.end()
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

http.createServer((req, res) => getApiHandler(req, res).catch(console.dir)).listen("7080")

