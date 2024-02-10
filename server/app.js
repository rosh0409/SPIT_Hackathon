import "./db/connection.js";
import express from "express";
import { LenderRoutes } from "./routes/lenderRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//!Lender Routes
app.use("/api/lender", LenderRoutes);

//!Borrower Routes
app.use("/api/borrower", LenderRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) return err.message;
  console.log("server started");
});
