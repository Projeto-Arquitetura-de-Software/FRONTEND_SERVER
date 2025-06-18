// src/components/EventoManager.jsx

import { useState, useEffect } from 'react';
import {
  carregarEventos,
  handleCriarEvento,
  handleAtualizarEvento,
  handleDeletarEvento
} from '../controllers/eventoController';

// Importe os novos componentes
import EventoForm from './EventoForm';
import EventoList from './EventoList';

export default function EventoManager() {
  // Toda a lógica e estados continuam aqui, no componente pai
  const [eventos, setEventos] = useState([]);
  const [form, setForm] = useState({ nome: '', local: '', data: '', ingressosDisponiveis: '' });
  const [editandoId, setEditandoId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para o botão

  const fetchEventos = async () => {
    try {
      setIsLoading(true);
      const dados = await carregarEventos(); // Supondo que carregarEventos agora retorna os dados
      setEventos(dados);
      setError(null);
    } catch (err) {
      setError("Falha ao carregar eventos.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const callback = () => {
      fetchEventos();
      // Aqui você adicionaria uma notificação de sucesso (toast)
    };
    
    if (editandoId) {
      await handleAtualizarEvento(editandoId, form, callback);
      setEditandoId(null);
    } else {
      await handleCriarEvento(form, callback);
    }
    
    setForm({ nome: '', local: '', data: '', ingressosDisponiveis: '' });
    setIsSubmitting(false);
  };

  const onEditar = (evento) => {
    setEditandoId(evento.id);
    // Formata a data para o formato YYYY-MM-DD que o input[type=date] espera
    const dataFormatada = new Date(evento.data).toISOString().split('T')[0];
    setForm({ ...evento, data: dataFormatada });
  };

  const onDeletar = async (id) => {
    await handleDeletarEvento(id, () => {
        fetchEventos();
        // Aqui você adicionaria uma notificação de sucesso (toast)
    });
  };

  // O retorno agora é muito mais limpo
  return (
    <div>
      <h2>Gerenciador de Eventos</h2>
      <EventoForm
        form={form}
        editandoId={editandoId}
        onSubmit={onSubmit}
        onChange={onChange}
        isSubmitting={isSubmitting}
      />
      <hr />
      {isLoading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && !error && (
        <EventoList
          eventos={eventos}
          onEditar={onEditar}
          onDeletar={onDeletar}
        />
      )}
    </div>
  );
}