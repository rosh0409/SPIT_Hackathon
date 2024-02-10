import express from "express";
import { LenderSignup } from "../controllers/lender/signup.js";
import multer from "multer";
import { storage } from "../controllers/utils/uploadImage.js";
import { LenderSignin } from "../controllers/lender/singin.js";
import { GetAllLender } from "../controllers/lender/getAll.js";

export const LenderRoutes = express.Router();

const upload = multer({ storage: storage });

//!All Get Routes
LenderRoutes.get("/get-all-lenders",GetAllLender)

//!All Post Routes
LenderRoutes.post("/signin", LenderSignin);
LenderRoutes.post("/signup", upload.single("profile"), LenderSignup);
