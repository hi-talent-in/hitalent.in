// import axios from "axios";
// import { WebhookClient } from "dialogflow-fulfillment";

// export const chatBot = (req, res) => {
//   const agent = new WebhookClient({ request: req, response: res });
//   let intentMap = new Map();
//   intentMap.set("Default Welcome Intent", welcome);
//   intentMap.set("Default Fallback Intent", queryGPT);
//   agent.handleRequest(intentMap);
//   function welcome(agent) {
//     agent.add(
//       "Hi, I am your virtual HiTalent assistant. How are you doing today?"
//     );
//   }
//   async function queryGPT(agent) {
//     const instance = axios.create({
//       baseURL: "https://api.openai.com/v1/",
//       headers: { Authorization: `Bearer ${process.env.OPENAI_API}` },
//     });
//     let query = agent.query;
//     const completionParmas = {
//       prompt: query,
//       model: "text-ada-001",
//       max_tokens: 1000,
//       temperature: 0.85,
//       n: 1,
//     };
//     await instance
//       .post("/completions", completionParmas)
//       .then((result) => {
//         const botResponse = result.data.choices[0].text.trim();
//         agent.add(botResponse);
//       })
//       .catch((error) => {
//         agent.add("Sorry ,right now I'm sleeping.");
//       });
//   }
// };
