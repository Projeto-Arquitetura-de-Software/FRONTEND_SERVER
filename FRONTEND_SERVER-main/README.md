# Front-End - Sistema de Eventos (APP1)

Este repositório contém o **front-end** da aplicação de compra e venda de ingressos para eventos, feito em React seguindo o padrão MVC. A aplicação consome as APIs REST disponibilizadas pelo API Gateway.

## Responsável
- Nome: Yasmin e Alline
- Função: APP1 - Interface Web (React)

## Funcionalidades
- Listar eventos
- Criar novo evento
- Editar evento existente
- Excluir evento

## Estrutura MVC
```
src/
├── models/         # Acesso à API REST (axios)
├── controllers/    # Lógica e orquestração das ações
├── components/     # Interface visual (React)
├── App.jsx         # Componente principal
└── main.jsx        # Entrada do projeto
```

##  API Gateway
Configure a variável de ambiente `VITE_API_GATEWAY_URL` no Railway para apontar para o URL do gateway do back-end.

## Rodando localmente
```bash
npm install
npm run dev
```

## Deploy Railway
- Acesse https://railway.app
- Crie novo projeto -> Importar repositório -> Configure variáveis de ambiente
- Build command: `npm install && npm run build`
- Start command: `npx serve dist`