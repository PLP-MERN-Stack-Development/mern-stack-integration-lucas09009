import express from "express";
import { uploadImage, upload } from "../controllers/uploadController.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

// router.post("/", auth, upload.single("image"), uploadImage);

export default router;
