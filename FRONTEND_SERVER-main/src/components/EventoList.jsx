// src/components/EventoList.jsx

export default function EventoList({ eventos, onEditar, onDeletar }) {
    if (eventos.length === 0) {
      return <p>Nenhum evento cadastrado.</p>;
    }
  
    return (
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            {evento.nome} - {evento.local} - {new Date(evento.data).toLocaleDateString()} - {evento.ingressosDisponiveis} ingressos
            <button onClick={() => onEditar(evento)}>Editar</button>
            <button onClick={() => onDeletar(evento.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    );
  }