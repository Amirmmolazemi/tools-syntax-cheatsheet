import { createServer } from "http";

// create server
const server = createServer((req, res) => {
  // something .....
});

// add sever on port ... and remind you that is running
server.listen(port, () => console.log(`server is running on port ${port}`));

// create an API
const serverWithAPI = createServer((req, res) => {
  if (req.url === "/api/example" && req.method === "METHOD") {
    // something ...
  }
});

// using port from enviorment variables
const PORT = process.env.PORT;

//middleware function
const middlewareFunction = (req, res, next) => {
  // something ...
  next();
};

// use middleware
const serverWithMiddleware = createServer((req, res) => {
  middlewareFunction(req, res, () => {
    // something ...
  });
});

// send a message
res.send("something ...");
res.end();

// set header
res.setHeader("something ...", "something ...");

// write header
res.writeHead(statusCode, { "something ...": "something ..." });
