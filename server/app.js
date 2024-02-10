import "./db/connection.js";
import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { BorrowerRoutes } from "./routes/borrowerRoutes.js";
import { LenderRoutes } from "./routes/lenderRoutes.js";
import multer from "multer";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const app = express();
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

//! Making static file access over http
app.use("/static", express.static("public/uploads"));


// const upload = multer({ storage: "public/uploads" });

// app.post("/", upload.single("profile"), (req, res) => {
//   res.send(req.file.filename);
// });

//!Lender Routes
app.use("/api/lender", LenderRoutes);

//!Borrower Routes
app.use("/api/borrower", BorrowerRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) return err.message;
  console.log("server started");
});
