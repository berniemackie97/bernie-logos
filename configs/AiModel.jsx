const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Modern Generate a text prompt to create Logo for Logo title/Brand name : BernieSoft with description: Software company and referring to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with an ideas field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"ideas\": [\n    {\n      \"id\": 1,\n      \"description\": \"Friendly techie with a tablet\"\n    },\n      {\n      \"id\": 2,\n       \"description\": \"Animated coder with glasses\"\n    },\n    {\n      \"id\": 3,\n      \"description\": \"Smiling robot holding chip\"\n    },\n    {\n      \"id\": 4,\n      \"description\": \"Playful character with keyboard\"\n    }\n   \n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();