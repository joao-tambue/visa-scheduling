import { apiRequest } from "./api.js";

export function getProfile() {
  return apiRequest("/api/user/profile");
}