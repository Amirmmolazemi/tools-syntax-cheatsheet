import axios from "axios";

// create an api to use instead of axios
const api = axios.create({ baseURL: "https://example.com" });

// get request
api.get("/example");

// post request
api.post("/example", data);

// patch request
api.patch("/example/1", data);

// put request
api.put("/example/1", data);

// delete request
api.delete("/example/1");

// interceptor for request
api.interceptors.request.use({
  // something ...
});

// interceptor for response
api.interceptors.response.use({
  // something ...
});
