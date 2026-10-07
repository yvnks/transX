import express from "express";
import "dotenv/config";
import connectDatabase from "./helpers/db.connect.js";

const app = express();

// Set up code to start server.
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDatabase();

    const server = app.listen(PORT, () => {
      console.log(
        `Server started in ${process.env.NODE_ENV} on port:${PORT}; \n Visit http://localhost:${process.env.PORT}`,
      );
    });

    process.on("unhandledRejection", (err) => {
      console.log(err.message);
      server.close(() => {
        process.exit(1);
      });
    });
  } catch (error) {
    console.log(`ERROR:`, error);
  }
};
startServer();
