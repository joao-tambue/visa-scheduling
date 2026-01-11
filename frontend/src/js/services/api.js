import { API_BASE_URL } from "../config/env.js";

function getAuthHeader() {
  const token = localStorage.getItem("token");
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}

export async function apiRequest(endpoint, options = {}) {
  const isFormData = options.body instanceof FormData;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...getAuthHeader(),
      ...(options.headers || {})
    },
    ...options
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}

// export async function apiGet(endpoint) {
//   const response = await fetch(`${API_BASE_URL}${endpoint}`);

//   if (!response.ok) {
//     throw new Error("Erro na requisição");
//   }

//   return response.json();
// }

// export async function apiPost(endpoint, data) {
//   const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   });

//   return response.json();
// }