import { useState } from "react";

export default function TranslateChat() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");
  const [selectedLang, setSelectedLang] = useState("en"); // default English

  // Translate using backend API
  const translateText = async () => {
    if (!input.trim()) return;

    const res = await fetch("https://chatbox-orgy.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input,
        to: selectedLang,
      }),
    });

    const data = await res.json();
    setTranslated(data.translated || "Translation failed");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">

      {/* HEADER */}
      <div className="w-full py-5 bg-white shadow-sm flex justify-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          🌐 Translator Chat
        </h1>
      </div>

      {/* MAIN BOX */}
      <div className="w-full max-w-5xl mt-6 bg-white shadow-lg rounded-xl p-6">
        
        {/* LANGUAGE DROPDOWN */}
        <div className="flex justify-center mb-5">
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="border p-2 rounded-lg text-lg shadow-sm"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="te">Telugu</option>
          </select>
        </div>

        {/* 2 COLUMNS */}
        <div className="grid grid-cols-2 gap-4">

          {/* LEFT INPUT */}
          <div className="border rounded-xl p-4 h-96 bg-gray-50 flex flex-col">
            <h2 className="font-semibold mb-2 text-gray-600">Enter text</h2>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 w-full p-3 border rounded-xl outline-none bg-white"
              placeholder="Type text to translate..."
            ></textarea>
          </div>

          {/* RIGHT OUTPUT */}
          <div className="border rounded-xl p-4 h-96 bg-gray-50 flex flex-col">
            <h2 className="font-semibold mb-2 text-gray-600">Translated</h2>

            <div className="flex-1 w-full p-3 bg-white rounded-xl border text-gray-700 whitespace-pre-wrap">
              {translated || "Translation will appear here…"}
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={translateText}
            className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-green-700 transition"
          >
            Translate
          </button>
        </div>

      </div>
    </div>
  );
}
