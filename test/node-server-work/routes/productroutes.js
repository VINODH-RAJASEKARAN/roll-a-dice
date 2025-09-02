const express = require('express');
const { product_catalog } = require('../controller/productcontroller');
const router = express.Router();

router.get('/testcatalogform', product_catalog);
// router.post('/post-information', postpage);
// router.delete('/delete-row/:id', deletepage);
// router.get('/rowselectform/:id/:rowdata', rowselect);

module.exports = router;