import { getProfile } from "../services/user.service.js";

async function loadProfile() {
  try {
    const response = await getProfile();
    console.log(response.data.user);
  } catch (error) {
    if (error.message === "Unauthorized") {
      window.location.href = "../../pages/login.html";
    }
  }
}

loadProfile();