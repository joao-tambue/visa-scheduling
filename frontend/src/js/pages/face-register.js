import { registerFace } from "../services/face.service.js";

const form = document.getElementById("faceForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "";

  const fileInput = document.getElementById("image");
  const file = fileInput.files[0];

  if (!file) {
    message.textContent = "Selecione uma imagem";
    return;
  }

  try {
    const response = await registerFace(file);
    message.textContent = response.message;
  } catch (error) {
    message.textContent =
      error.message || "Erro ao cadastrar face";
  }
});