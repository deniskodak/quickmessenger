require("dotenv").config();
const axios = require("axios");

const url =
  "https://shared-api.forefront.link/organization/lKr91mPNhpSE/gpt-j-6b-vanilla/completions/2JrDQ5BhJAm6";
const body = {
  max_tokens: 64,
  top_p: 1,
  top_k: 40,
  temperature: 0.8,
  repetition_penalty: 1,
};

const headers = {
  Authorization: `Bearer ${process.env.MODEL_API}`,
  "Content-Type": "application/json",
};

const sendMessage = async (req, res, _) => {
  const { prompt } = req.body;
  const updatedBody = { ...body, prompt };
  try {
    const data = await axios.post(url, updatedBody, { headers });
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = { sendMessage };
