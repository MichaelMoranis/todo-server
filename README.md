# Todo App API

Essa é a API que desenvolvi para meu aplicativo de lista de tarefas. Como um iniciante em desenvolvimento backend, decidi usar **Fastify** e **PostgreSQL** para gerenciar e salvar as tarefas. Foi uma jornada de muito aprendizado, especialmente ao criar meu próprio backend e fazer a integração com o banco de dados. Espero que esse projeto possa ser útil e inspire outros desenvolvedores iniciantes a continuar aprendendo e explorando novas tecnologias!

## Tecnologias Utilizadas

- **Fastify**: Um framework web rápido e eficiente para Node.js.
- **PostgreSQL**: Um sistema de banco de dados relacional robusto.
- **TypeScript**: Para uma experiência de desenvolvimento mais segura com tipos estáticos.
- **@fastify/cors**: Para lidar com as configurações de CORS na API.

## Como Rodar a Aplicação

Para rodar essa aplicação em seu ambiente local, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/todo-server.git
   cd todo-server
### Configurar o Banco de Dados:

- Você precisa ter uma instância do PostgreSQL rodando.
- Crie um banco de dados para a aplicação.
- Configure as variáveis de ambiente necessárias, como as credenciais do banco de dados, em um arquivo `.env`.

### Rodando a API:

Para iniciar a aplicação em ambiente de desenvolvimento, execute:

```bash
npm run dev

```
O servidor será iniciado por padrão na porta `3333`. Você pode acessá-lo em [http://localhost:3333](http://localhost:3333).

### Endpoints Disponíveis:

- **POST** `/tasks`: Cria uma nova tarefa.
- **GET** `/tasks`: Lista todas as tarefas.
- **DELETE** `/tasks/:id`: Deleta uma tarefa pelo ID.

### Considerações Finais

Estou animado por ter desenvolvido essa API e por ter explorado tecnologias como Fastify e PostgreSQL. Sei que ainda tenho muito a aprender, mas estou ansioso para continuar aprimorando minhas habilidades e criando projetos cada vez mais complexos.

