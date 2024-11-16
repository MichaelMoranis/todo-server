import { sql } from "./src/conect-database/sql"

// sql`DROP TABLE IF EXISTS tasks`.then(() => {
//     console.log("tabela apagada !!")
// })

sql`
 CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    newtext TEXT NOT NULL,
    isChecked BOOLEAN DEFAULT FALSE
);

`
.then(() => {
    console.log("tabela criada")
})