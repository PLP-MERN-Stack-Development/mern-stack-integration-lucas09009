import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import uploadRoutes from "./routes/upload.js";


dotenv.config();
const app = express();

app.use(express.json()); // indispensable pour lire JSON

// Routes auth
app.use("/api/auth", authRoutes);

// Connexion Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running on port", PORT));


app.use("/api/posts", postRoutes);

app.use("/api/upload", uploadRoutes);
