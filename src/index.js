import { GraphQLServer } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";

const resolvers = {
  Query: Query,
  Mutation: Mutation,
  User: User,
  Comment: Comment,
  Post: Post,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers,
  context: {
    db,
  },
});

server.start(() => {
  console.log("The Server is Up!");
});