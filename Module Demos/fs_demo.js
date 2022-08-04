const fs = require('fs');

// fs.writeFile('hello.txt', 'hello world!', err => {
// 	if(err) throw err;
// 	console.log("success");
// });

fs.appendFile('hello.txt', ' noice', err => {
	if(err) throw err;
	console.log("success");
});


// Creates a folder on the specified path
fs.mkdir(path.join(__dirname, '/test_folder'), {}, err => {
	if(err) throw err;
	console.log("success");
});

// Lacks examples