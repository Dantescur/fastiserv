import fCookie from "@fastify/cookie";
import fjwt, { FastifyJWT } from "@fastify/jwt";
import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { User, sequelize } from "../config/config";
import { userRoutes } from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";
import fastify from "fastify";

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

app.register(fjwt, { secret: "my-secret" });

app.decorate(
  "authenticate",
  async (req: FastifyRequest, reply: FastifyReply) => {
    const token = req.cookies.access_token;

    if (!token) {
      return reply.status(401).send({ message: "Authentication required" });
    }

    const decoded = req.jwt.verify<FastifyJWT["user"]>(token);
    req.user = decoded;
  },
);

app.addHook("preHandler", (req, res, next) => {
  req.jwt = app.jwt;
  return next();
});

app.addHook(
  "onSend",
  async (req: FastifyRequest, reply: FastifyReply, payload) => {
    reply.header("X-Powered-By", "Fastify");
  },
);

app.register(fCookie, {
  secret: "my-other-secret",
  hook: "preHandler",
});

for (let schema of [...userSchemas]) {
  app.addSchema(schema);
}

app.get("/healtcheck", (req, res) => {
  res.send({ message: "Success" });
});

app.register(userRoutes, { prefix: "api/users" });

const listeners = ["SIGINT", "SIGTERM"];
listeners.forEach((signal) => {
  process.on(signal, async () => {
    await sequelize.close();
    await app.close();
    process.exit(0);
  });
});

async function main() {
  sequelize.sync();
  console.log("Database sync successfully");
  await app.listen({
    port: 3000,
  });
}

main();
