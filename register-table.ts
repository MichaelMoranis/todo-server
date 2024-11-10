import { sql } from "./sql"

// sql`DROP TABLE IF EXISTS users`.then(() => {
//     console.log("tabela de usuários apagada!")
// })

sql`
 CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`
.then(() => {
    console.log("Tabela de usuários criada!")
})