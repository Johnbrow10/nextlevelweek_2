import knex from 'knex';
import path from 'path';

// migrations - controlam as versoes do banco de dados;

const db = knex({
    client: 'sqlite3',
    connection: {
// para criar um arquivo na pasta database,
//  o __dirname serve para nao precisar da barra no caminho
        filename: path.resolve(__dirname,'database.sqlite' )
    },
    useNullAsDefault: true,
});

export default db;