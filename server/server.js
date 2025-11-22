import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/translate", async (req, res) => {
  try {
    const { text, to } = req.body;

    if (!text || !to) {
      return res.status(400).json({ error: "Missing text or language" });
    }

    // FREE Google Translate API (Unofficial)
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const data = await response.json();

    const translated = data[0][0][0]; // Extract translated text
    res.json({ translated });
  } catch (err) {
    console.error("Translation Error:", err);
    res.status(500).json({ error: "Translation failed" });
  }
});

// ✅ Use Render’s dynamic port instead of fixed 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
