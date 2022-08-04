const url = require('url');

// I forgot what happens here/keypoints that can be useful with the URL module

const sampleURL = url.parse('http://prongs.com:8000/fixations?query=string#hash');

console.log(sampleURL.host);

console.log(sampleURL.hostname);

console.log(sampleURL.href);

console.log(sampleURL.port);

console.log(sampleURL.search);