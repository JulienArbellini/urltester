import Fastify from "fastify";

const server = Fastify({ logger: true });

server.get("/health", async () => {
  return { status: "ok" };
});

const PORT = 3000;

server.listen({ port: PORT }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  console.log(`Server listening on http://localhost:${PORT}`);
});