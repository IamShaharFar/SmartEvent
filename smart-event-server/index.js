const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");
const GptApiCall = require("./GptApiCallModel.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
config();

const port = 5000;
const mongodbUri =
  "mongodb+srv://drshacksmartevent:199FARAD@smartevent.n9ax0ah.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.post("/", async (req, res) => {
  try {
    console.log("new event req /")
    const openai = new OpenAIApi(
      new Configuration({
        apiKey: process.env.OPEN_AI_API_KEY,
      })
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const Ip = req.socket.remoteAddress;
    const apiCalls = await GptApiCall.find({
      clientIp: Ip,
      createdAt: { $gte: today },
    });
    if (apiCalls.length >= 3 && Ip != "::1") {
      return res.status(400).json("you approach the limit of requests per day");
    }
    const message = req.body.message;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            `You will be provided with a message containing details about an event, and your task is to extract the relevant information and return a JSON object with the following details:
        
            name, description, startDate in the format "YYYY-MM-DD", startTime in the format "HH:mm", location, endDate in the format "YYYY-MM-DD", endTime in the format "HH:mm", organizer\n` +
            message,
        },
      ],
      temperature: 0,
      max_tokens: 1000,
    });
    const apiCall = new GptApiCall({
      clientIp: Ip,
      message: message,
      response: "response",
    });
    const event = response.data.choices[0].message.content;
    apiCall.save();
    res.status(201).json({event: event});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
