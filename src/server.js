import { createServer } from "node:http";

const port = process.env.PORT || 3000;

const server = createServer((_request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });

  response.end("My CI pipeline is working!\n");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});