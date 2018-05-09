const express = require('express');
const router = express.Router();

const wiki_controller = require('../controller/wiki');

router.get('/',wiki_controller.wiki_get);
router.get('/about',wiki_controller.wiki_about);

module.exports = router;