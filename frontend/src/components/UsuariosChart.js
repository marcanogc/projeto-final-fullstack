import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function UsuariosChart({ usuarios }) {
  // Agrupar por comportamento
  const comportamentoCounts = usuarios.reduce((acc, usuario) => {
    const key = usuario.comportamento || 'Desconhecido';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(comportamentoCounts),
    datasets: [
      {
        label: 'Usuários por Comportamento',
        data: Object.values(comportamentoCounts),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Distribuição de Comportamentos dos Usuários',
      },
    },
  };

  return <Bar data={data} options={options} />;
}
