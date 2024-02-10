import express from "express";

export const LenderRoutes = express.Router();

LenderRoutes.get("/", (req, res) => {
  res.send("helllo");
});
