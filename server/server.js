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

    const translated = data[0][0][0]; // Google response format

    res.json({ translated });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Translation failed" });
  }
});

app.listen(5000, () => console.log("🔥 Server running on port 5000"));
