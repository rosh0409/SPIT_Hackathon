import express from "express";
import { BorrowerSignup } from "../controllers/borrower/signup.js";
import multer from "multer";
import { storage } from "../controllers/utils/uploadImage.js";
import { BorrowerSignin } from "../controllers/borrower/signin.js";

export const BorrowerRoutes = express.Router();

const upload = multer({ storage: storage });

BorrowerRoutes.post("/", (req, res) => {
  res.send("we");
});

//!All Post Routes
BorrowerRoutes.post("/signin", BorrowerSignin);
BorrowerRoutes.post("/signup", upload.single("profile"), BorrowerSignup);
