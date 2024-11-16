// Carrega automaticamente as variáveis de ambiente
import "dotenv/config";
import { createServer } from "http";
import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.DATABASE_URL); // Conexão com o banco de dados

// Função de resposta de solicitação
const requestHandler = async (req, res) => {
  try {
    const result = await sql`SELECT version()`;
    const { version } = result[0];

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(version);
  } catch (error) {
    console.error("Erro na conexão com o banco de dados:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Erro ao conectar ao banco de dados");
  }
};

// Cria o servidor e escuta na porta 3000
createServer(requestHandler).listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
