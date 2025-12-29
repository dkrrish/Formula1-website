// Toggle chatbot visibility
function toggleChatbot() {
  const box = document.getElementById("chatbot-box");
  box.style.display = box.style.display === "none" ? "flex" : "none";
}

// ---------------- LOCAL F1 RESPONSES (KEYWORD-BASED) ---------------- //
const f1ChatbotData = [
  { keywords: ["hello", "hi", "hey"], response: "Hello! Welcome to the F1 chatbot. Ask me about the 2025 Formula 1 season." },
  { keywords: ["champion", "world champion"], response: "Oscar Piastri is the 2025 F1 World Champion, driving for McLaren." },
  { keywords: ["drivers standing", "leaderboard", "points"], response: "Oscar Piastri leads the 2025 drivers’ standings, followed by Lando Norris and Max Verstappen." },
  { keywords: ["top teams", "constructors"], response: "The top teams in 2025 are McLaren, Ferrari, Mercedes, Red Bull, and Williams." },
  { keywords: ["australian", "melbourne"], response: "Lando Norris won the 2025 Australian Grand Prix for McLaren." },
  { keywords: ["monaco"], response: "Lando Norris also won the 2025 Monaco Grand Prix." },
  { keywords: ["next race", "upcoming race", "schedule"], response: "The next race is the Dutch Grand Prix in Zandvoort on August 31, 2025." },
  { keywords: ["ferrari"], response: "Ferrari, led by Charles Leclerc and Carlos Sainz, remains a strong contender in 2025." },
  { keywords: ["mclaren"], response: "McLaren leads the 2025 championship with Oscar Piastri and Lando Norris." },
  { keywords: ["red bull", "verstappen"], response: "Red Bull Racing, with Max Verstappen and Sergio Perez, remains a top-tier team." },
  { keywords: ["hamilton", "lewis"], response: "Lewis Hamilton is a 7-time F1 World Champion driving for Mercedes." },
  { keywords: ["drs", "pit stop", "safety car"], response: "DRS reduces drag for overtakes, pit stops change tyres, and safety cars control race pace during incidents." },
  { keywords: ["thank", "thanks"], response: "You're welcome! Feel free to ask more about F1 anytime." },
  { keywords: ["f1", "formula 1"], response: "Formula 1 is the pinnacle of motorsport, featuring 10 teams and 20 drivers racing globally." }
];

// ---------------- SEND MESSAGE FUNCTION ---------------- //
async function sendMessage() {
  const input = document.getElementById("user-msg");
  const msg = input.value.trim();
  if (!msg) return;

  const chatlog = document.getElementById("chatlog");

  // Append user message
  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<strong>You:</strong> ${msg}`;
  chatlog.appendChild(userMsg);

  const lower = msg.toLowerCase();
  let response = null;

  // Try local keyword-based response
  for (const entry of f1ChatbotData) {
    if (entry.keywords.some(keyword => lower.includes(keyword))) {
      response = entry.response;
      break;
    }
  }

  // If no keyword match → use Hugging Face AI
  if (!response) {
    response = await getAIResponse(msg);
  }

  // Append bot reply
  const botMsg = document.createElement("p");
  botMsg.innerHTML = `<strong>Bot:</strong> ${response}`;
if (response.startsWith("Sorry")) {
  botMsg.style.color = "#ff3b3b";
} else {
  botMsg.style.color = "#00ff7f";
}
  chatlog.appendChild(botMsg);

  input.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;
}

// ---------------- HUGGING FACE INTEGRATION ---------------- //
// ⚠️ Replace "YOUR_API_KEY" below with your free Hugging Face token
async function getAIResponse(userInput) {
  const apiKey = ""; // Get from https://huggingface.co/settings/tokens
  const model = "mistralai/Mixtral-8x7B-Instruct"; 

  try {
    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: userInput }),
    });

    const data = await response.json();
    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text;
    } else if (data.generated_text) {
      return data.generated_text;
    } else {
      return "Hmm, I couldn’t fetch that right now. Try again later!";
    }
  } catch (error) {
    console.error(error);
    return "Sorry! There was an issue connecting to the AI service. Please try again later.";
  }
}

// ---------------- ENTER KEY SUPPORT ---------------- //
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("user-msg");
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
