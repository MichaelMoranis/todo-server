import { UserController } from "../controllers/user.controller";
import server from "../server";

export async function userRoutes() {
  const userController = new UserController();

  server.post("/register", async (request, reply) => {
    return userController.createUser(request, reply);
  });

  server.get("/register", async (request, reply) => {
    return userController.listUser(request, reply);
  });

  server.post("/login", async (request, reply) => {
    return userController.loginUser(request, reply);
  });
}
