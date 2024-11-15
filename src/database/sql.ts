// Carrega automaticamente as variáveis de ambiente
import "dotenv/config";
import { createServer, IncomingMessage, ServerResponse } from "http"; // Tipagem para HTTP
import { neon } from "@neondatabase/serverless";

// Define a tipagem explícita para o cliente SQL
type NeonClient = (query: TemplateStringsArray, ...values: any[]) => Promise<any[]>;

// Conexão com o banco de dados
export const sql: NeonClient = neon(process.env.DATABASE_URL!);

// Função de resposta de solicitação
const requestHandler = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  try {
    // Executa a query no banco
    const result = await sql`SELECT version()`;
    const { version } = result[0] as { version: string };

    // Responde com sucesso
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(version);
  } catch (error) {
    console.error("Erro na conexão com o banco de dados:", error);

    // Responde com erro
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Erro ao conectar ao banco de dados");
  }
};

// Cria o servidor e escuta na porta 3000
createServer(requestHandler).listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

