// src/components/EventoForm.jsx

export default function EventoForm({ form, editandoId, onSubmit, onChange, isSubmitting }) {
    return (
      <form onSubmit={onSubmit}>
        <input
          name="nome"
          placeholder="Nome do Evento"
          value={form.nome}
          onChange={onChange}
          required
          disabled={isSubmitting}
        />
        <input
          name="local"
          placeholder="Local"
          value={form.local}
          onChange={onChange}
          required
          disabled={isSubmitting}
        />
        <input
          name="data"
          type="date"
          value={form.data}
          onChange={onChange}
          required
          disabled={isSubmitting}
        />
        <input
          name="ingressosDisponiveis"
          type="number"
          placeholder="Ingressos disponíveis"
          value={form.ingressosDisponiveis}
          onChange={onChange}
          required
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : (editandoId ? "Atualizar Evento" : "Criar Evento")}
        </button>
      </form>
    );
  }