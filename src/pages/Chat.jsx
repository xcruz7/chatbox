import { useState } from "react";

export default function Translator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const translate = async () => {
    if (!input.trim()) return;

    // Dummy translation for now
    // Later we will connect real API
    setOutput("Translating…");

    // Fake translation delay
    setTimeout(() => {
      setOutput("👉 (Example translation) " + input);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Translator</h1>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="grid grid-cols-2 gap-6">
          
          {/* LEFT TEXT BOX */}
          <div>
            <p className="font-semibold mb-2">Enter Text</p>
            <textarea
              className="w-full h-72 p-4 border rounded-lg outline-none resize-none"
              placeholder="Type something…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* RIGHT TEXT BOX */}
          <div>
            <p className="font-semibold mb-2">Translated Text</p>
            <textarea
              className="w-full h-72 p-4 border rounded-lg bg-gray-50 outline-none resize-none"
              value={output}
              readOnly
            />
          </div>

        </div>

        {/* TRANSLATE BUTTON */}
        <div className="flex justify-center mt-6">
          <button
            onClick={translate}
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700"
          >
            Translate
          </button>
        </div>

      </div>
    </div>
  );
}
