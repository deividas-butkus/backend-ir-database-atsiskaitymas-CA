import express from "express";
import cors from "cors";
import { connectToDb } from "./mongoClient.js";
import booksRouter from "./routes/books.js";

const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 5002;

const corsOptions = {
  origin: `http://localhost:${process.env.CLIENT_PORT}`,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/books", booksRouter);

const startServer = async () => {
  try {
    await connectToDb();
    console.log("MongoDB connection established, starting server...");

    const server = app.listen(SERVER_PORT, () => {
      console.log(`Server is up and running on port ${SERVER_PORT}.`);
    });

    const gracefulServerShutdown = async (signal) => {
      console.log(
        `Received ${signal}. Closing server and database connection...`
      );

      server.close((err) => {
        if (err) {
          console.error("Error during server shutdown:", err);
          process.exit(1);
        }
        console.log("Server closed.");
      });

      if (client) {
        try {
          await client.close();
          console.log("MongoDB connection closed.");
        } catch (error) {
          console.error("Error closing MongoDB connection:", error);
        }
      }

      console.log("Graceful shutdown completed.");
      process.exit(0);
    };

    process.on("SIGINT", () => gracefulServerShutdown("SIGINT"));
    process.on("SIGTERM", () => gracefulServerShutdown("SIGTERM"));
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

startServer();
