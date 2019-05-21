

const router = require('express').Router();
const Sgusers = require('../models/sgusers');


router.get('/', (req, res) => {
	Sgusers.findAll()
		.then((sgusers) => {
			if (!sgusers.length) return res.status(404).send({
				err: 'sgusers not found'
			});
			res.send(`find successfully: ${sgusers}`);
		})
		.catch(err => res.status(500).send(err));
});

module.exports = router;

