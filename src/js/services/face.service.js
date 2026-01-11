import { apiRequest } from "./api.js";

export function registerFace(imageFile) {
  const formData = new FormData();
  formData.append("image", imageFile);

  return apiRequest("/api/user/face/register", {
    method: "POST",
    body: formData
  });
}