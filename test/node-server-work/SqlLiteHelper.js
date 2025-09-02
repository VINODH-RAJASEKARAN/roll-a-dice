const sqlite3 = require('sqlite3').verbose();
const EventEmitter = require('events');
class SqlLiteHelper extends EventEmitter {

    createDbConnection() {
        const dbinstance = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
            console.error(err.message);
            }
            console.log(dbinstance)
            this.emit('dbInstanceCreated', dbinstance);
            console.log('Connected to the chinook database.');
        });
        console.log("Connection with SQLite has been established");
        return dbinstance;
    }
    
    doTask(db) {
        db.serialize(() => {
            db.each(`SELECT PlaylistId as id,
                            Name as name
                     FROM playlists`, (err, row) => {
              if (err) {
                console.error(err.message);
              }
              console.log(row.id + "\t" + row.name);
            });
        });
    }

}

module.exports = SqlLiteHelper;

//<a href="/rowselectform/<%= row.id %>/<%= row %>"> 
        //</a>

        // <% rowdata.forEach((row) => { %>
        //     <div onclick="loadForm('<%= JSON.stringify(row) %>')">
        //         <p><%= (row.city); %></p>
        //         <p><%= (row.date); %></p>
        //         <p><%= (row.address); %></p>
        //     </div>
        // <% }); %>  

        //<div id="tableGrid" data-doc="<%= row %>">

        // const tableGrid = document.getElementById("tableGrid");
        // tableGrid.addEventListener('click', (e) => {
        //     const data = tableGrid.dataset.doc; //returns string
        // });