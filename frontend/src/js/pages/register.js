import { registerUser } from "../services/auth.service.js";

const form = document.getElementById("registerForm");
const errorText = document.getElementById("error");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorText.textContent = "";

  const formData = new FormData(form);

  const payload = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    full_name: formData.get("full_name") || null
  };

  try {
    const response = await registerUser(payload);

    // salva token
    localStorage.setItem("token", response.data.token);

    // redireciona
    window.location.href = "../../index.html";

  } catch (error) {
    errorText.textContent = error.message || "Erro ao cadastrar";
  }
});