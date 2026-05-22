import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import escola from "./dados/escola.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

app.post("/chat", async (req, res) => {

  try {

    const { message } = req.body;

    const contexto = `
    Você é o assistente virtual oficial do Instituto Politécnico Privado SAPEMUA.

Responda apenas com base nestas informações:

${escola}

Se a pergunta não estiver relacionada à escola,
responda educadamente que só pode responder
assuntos do SAPEMUA.
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview"
    });

    const result = await model.generateContent(
      contexto + "\nPergunta: " + message
    );

    const resposta = result.response.text();

    res.json({
      resposta
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      erro: "Erro no chatbot"
    });

  }

});

app.listen(3000, () => {
  console.log("IA rodando na porta 3000");
});