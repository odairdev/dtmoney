import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 5000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 800,
          createdAt: new Date('2021-02-20 09:00:00')
        },
        {
          id: 3,
          title: 'Compras do mês',
          type: 'withdraw',
          category: 'Mercado',
          amount: 600,
          createdAt: new Date('2021-02-24 09:00:00')
        },
        {
          id: 4,
          title: 'Salário',
          type: 'deposit',
          category: 'Empresa',
          amount: 8000,
          createdAt: new Date('2021-02-06 09:00:00')
        },
        {
          id: 5,
          title: 'Prestação Carro',
          type: 'withdraw',
          category: 'Carro',
          amount: 757.50,
          createdAt: new Date('2021-02-05 09:00:00')
        },
        {
          id: 6,
          title: 'Freelance API',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 2450,
          createdAt: new Date('2021-02-03 09:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', (schema) => {
      return schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
    })

    this.del('/transactions/:id')
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

