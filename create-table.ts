import { sql } from "./sql"

// sql`DROP TABLE IF EXISTS tasks`.then(() => {
//     console.log("tabela apagada !!")
// })

sql`
 CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    newText TEXT NOT NULL,
    isChecked BOOLEAN DEFAULT FALSE
);

`
.then(() => {
    console.log("tabela criada")
})