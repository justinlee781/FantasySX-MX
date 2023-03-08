function addCorsHeaders(req, res, next) {
    // Allow requests from any origin
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Allow the following HTTP methods: GET, POST, PUT, DELETE
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // Allow the following headers: Content-Type, Authorization
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    // Handle preflight requests (OPTIONS method)
    if (req.method === "OPTIONS") {
      // Send a 200 response with the above headers
      res.sendStatus(200);
    } else {
      // Call the next middleware function in the chain
      next();
    }
  }
  