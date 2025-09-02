const sqlite3 = require('sqlite3').verbose();
const dbinstance = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

const blogpage = (req, res) => {
    let sql = `SELECT InvoiceId as id, 
    BillingCity as city, 
    BillingCountry as country, 
    BillingAddress as address,
    InvoiceDate as date
    FROM invoices
    WHERE BillingCountry = ?
    ORDER BY InvoiceDate`;
    dbinstance.all(sql, ['India'], (err, rows) => {
        if (err) {
          console.log(err);
        }
        // rows.forEach((row) => {
        //   console.log(row.id+' '+row.name);
        // });
        res.render('testengine', {title : 'Vinodh', rowdata : rows});
      });
}

const postpage = (req, res) => {
    console.log(req.query.method);
    console.log(req.body);
    console.log(req.body.snippet);
    res.redirect('/curd/testform');
}

const deletepage = (req, res) => {
    console.log('inside delete');
    console.log(req.params.id);
    res.json({redirect : '/curd/testform'})
}

const rowselect = (req, res) => {
    console.log(req.params.id);
    console.log(req.params.rowdata);
    res.redirect('/testform');
}

module.exports = {
    blogpage,
    postpage,
    deletepage,
    rowselect
}