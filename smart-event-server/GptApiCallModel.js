const mongoose = require('mongoose');

const gptApiCallSchema = new mongoose.Schema({
  clientIp: { type: String, required: true },
  message: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('GptApiCall', gptApiCallSchema);
