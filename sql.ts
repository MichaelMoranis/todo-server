// import 'dotenv/config'
// import http from "http"
// import { neon } from "@neondatabase/serverless";


// export const sql = neon(process.env.DATABASE_URL);

// const PORT = process.env.PORT || 3000;
// const requestHandler = async (req, res) => {
//   const result = await sql`SELECT version()`;
//   const { version } = result[0];
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(version);
// };

// http.createServer(requestHandler).listen(3000, () => {
//   console.log(`Server running at http:/localhost:${PORT}`);
// });

import 'dotenv/config';
import http from "http";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não definida no arquivo de configuração");
}

export const sql = neon(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3000;

const requestHandler = async (req, res) => {
  try {
    const result = await sql`SELECT version()`;
    const { version } = result[0];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(version);
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Erro interno do servidor");
  }
};

http.createServer(requestHandler).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

