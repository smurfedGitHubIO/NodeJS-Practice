const http = require('http');

// Basic server creation
http.createServer((req, res) => {
	res.write("Hello World!");
	res.end();
}).listen(8000, () => console.log("Server running at port 8000"));

// Still lacks examples