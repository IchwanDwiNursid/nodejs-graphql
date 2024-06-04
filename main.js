import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { _db } from "./_db.js";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers/resolvers.js";
//---------Resolvers `like` Controller------------

// Server Setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at: " + url);
