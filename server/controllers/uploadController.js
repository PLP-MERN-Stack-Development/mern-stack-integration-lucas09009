import cloudinary from "../utils/cloudinary.js";
import multer from "multer";

// Stockage temporaire en mémoire
const storage = multer.memoryStorage();
export const upload = multer({ storage });

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // Upload vers Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      { folder: "mern_blog" },
      (error, result) => {
        if (error) return res.status(500).json({ error });
        res.json({ url: result.secure_url, public_id: result.public_id });
      }
    );

    // Écrire le buffer dans le stream
    result.end(req.file.buffer);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
