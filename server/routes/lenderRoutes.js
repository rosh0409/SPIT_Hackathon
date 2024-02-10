import express from "express";
import { LenderSignup } from "../controllers/lender/signup.js";
import multer from "multer";
import { storage } from "../controllers/utils/uploadImage.js";

export const LenderRoutes = express.Router();

const upload = multer({ storage: storage });

//!All Post Routes
LenderRoutes.post("/signup", upload.single("profile"), LenderSignup);