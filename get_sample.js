const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.end("noice");
});

router.get('/sample', (req, res) => {
	res.end("check");
});

module.exports = router;