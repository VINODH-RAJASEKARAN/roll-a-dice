const product_catalog = (req, res) => {
    // rows.forEach((row) => {
    //   console.log(row.id+' '+row.name);
    // });
    res.render('testengine', {title : 'Vinodh', rowdata : rows});
}
