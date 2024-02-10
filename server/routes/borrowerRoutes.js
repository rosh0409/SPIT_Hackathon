import express from "express";
import express from "express";

export const BorrowerRoutes = express.Router();

BorrowerRoutes.get("/", (req, res) => {
  res.send("helllo");
});
