import express from "express";

// create server
const app = express();

// running server on port ... with a message
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// build API with GET method
app.get("/example", (req, res) => {
  // something .....
});

// build API with POST method
app.post("/example", (req, res) => {
  // something .....
});

// build API with PATCH method
app.patch("/example", (req, res) => {
  // something .....
});

// build API with PUT method
app.put("/example", (req, res) => {
  // something .....
});

// build API with DELETE method
app.delete("/example", (req, res) => {
  // something .....
});

// change the status code with a message
res.status(statusCode).json({ message: "message" });

// middleware function
const middlewareFunction = (req, res, next) => {
  // something .....
  next();
};

// using middleware
app.use(middlewareFunction);
