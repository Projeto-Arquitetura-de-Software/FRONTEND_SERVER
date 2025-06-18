import {
  listarEventos,
  criarEvento,
  atualizarEvento,
  deletarEvento
} from '../models/eventoService';

export async function carregarEventos(setEventos) {
  const eventos = await listarEventos();
  setEventos(eventos);
}

export async function handleCriarEvento(evento, callback) {
  await criarEvento(evento);
  callback();
}

export async function handleAtualizarEvento(id, evento, callback) {
  await atualizarEvento(id, evento);
  callback();
}

export async function handleDeletarEvento(id, callback) {
  await deletarEvento(id);
  callback();
}