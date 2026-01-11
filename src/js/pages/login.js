import { loginUser } from "../services/auth.service.js";

const form = document.getElementById("loginForm");
const errorText = document.getElementById("error");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorText.textContent = "";

  const formData = new FormData(form);

  const payload = {
    username: formData.get("username"),
    password: formData.get("password")
  };

  try {
    const response = await loginUser(payload);

    // salva token
    localStorage.setItem("token", response.data.token);

    // salva usuário (opcional, mas útil)
    localStorage.setItem("user", JSON.stringify(response.data.user));

    // redirect pós-login
    window.location.href = "../../index.html";

  } catch (error) {
    errorText.textContent =
      error.message || "Usuário ou senha inválidos";
  }
});