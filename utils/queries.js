const db = require('../db/connection');

const viewAllDepartments = () => {
    const query = `SELECT * FROM department`;
    db.query(query, (err, results) => {
        if (err) throw err;
        console.table(results);
        
    });
};

module.exports = { viewAllDepartments };
