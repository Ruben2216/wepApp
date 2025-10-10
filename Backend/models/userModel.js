
    const { Pool } = require('pg');

    const db = new Pool({
        host: 'localhost', 
        user: 'postgres', 
        password: '1234', 
        database: 'webApp', 
        port: 5432
    });

module.exports = {
    findUser: (username, password, callback) => {
        db.query(
            'SELECT * FROM usuarios WHERE nombre_usuario = $1 AND password = $2',
            [username, password],
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(result.rows);
                }
            }
        );
    }
};