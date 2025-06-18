import axios from 'axios';

const API_URL = import.meta.env.VITE_API_GATEWAY_URL || 'http://localhost:3000/eventos';

export async function listarEventos() {
  const response = await axios.get(API_URL);
  return response.data.data || [];
}

export async function criarEvento(evento) {
  await axios.post(API_URL, evento);
}

export async function atualizarEvento(id, evento) {
  await axios.put(`${API_URL}/${id}`, evento);
}

export async function deletarEvento(id) {
  await axios.delete(`${API_URL}/${id}`);
}