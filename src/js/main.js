// Main JS helpers for navigation and shared behaviours
function goTo(path){ window.location.href = path; }

function showToast(msg){ alert(msg); }

// Expose small API for inline scripts that expect main.js
window.app = { goTo, showToast };

function redirect(path) {
  window.location.href = path;
}

window.redirectToLogin = () =>
  redirect("../pages/login.html");

window.redirectToCadastro = () =>
  redirect("../pages/cadastro.html");

window.redirectToForm = () =>
  redirect("../pages/reconhecimento.html");