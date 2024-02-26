import fCookie from "@fastify/cookie";
import "dotenv/config";
import fjwt, { FastifyJWT, Secret } from "@fastify/jwt";
import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { User, sequelize } from "../config/config";
import { userRoutes } from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";

const MY_SECRET: Secret = process.env.MY_SECRET as Secret;
const PORT: number = parseInt(process.env.PORT || "8080", 10);

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

app.register(fjwt, { secret: MY_SECRET });

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
  secret: process.env.MY_SECRET,
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
    host: "0.0.0.0",
    port: PORT,
  });
}

main();
