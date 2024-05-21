const express = require('express');
const jobController = require('../controller/jobs');
const router = express.Router();

router.get('/jobs', jobController.listJob);
router.post('/jobs', jobController.createJob);
router.put('/jobs/:id', jobController.editJob);
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;
