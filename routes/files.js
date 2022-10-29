const { Router } = require('express');
const { uploadFile } = require('../controllers/filesController');

const router = Router();

router.post('/', uploadFile);

module.exports = router;    