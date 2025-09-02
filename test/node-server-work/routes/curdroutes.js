const express = require('express');
const { blogpage, postpage, deletepage, rowselect } = require('../controller/curdcontroller');
const router = express.Router();

router.get('/testform', blogpage);
router.post('/post-information', postpage);
router.delete('/delete-row/:id', deletepage);
router.get('/rowselectform/:id/:rowdata', rowselect);

module.exports = router;