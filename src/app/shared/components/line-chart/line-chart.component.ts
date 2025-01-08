import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class LineChartComponent {
  // Etiquetas del eje X
  public chartLabels = ['04', '06', '08', '10', '12', '14'];

  // Opciones del gráfico
  public chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Oculta la leyenda
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Oculta las líneas del eje X
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false, // Oculta el borde
        },
      },
    },
  };

  // Tipo de gráfico
  public chartType: any = 'line';

  // Colores del gráfico
  public chartData = [
    {
      data: [425, 365, 268, 350, 410], // Datos para la primera ola
      label: 'Sessions',
      backgroundColor: 'rgba(63,81,181,1)', // Color de la primera área
      borderColor: 'rgba(63,81,181,1)', // Color de la línea
      pointBackgroundColor: 'rgba(63,81,181,1)',
      fill: true, // Habilitar el área sombreada
      tension: 0.4, // Suavizado de la línea
    },
    {
      data: [350, 300, 200, 400, 450], // Datos para la segunda ola
      label: 'Users',
      backgroundColor: 'rgba(0,150,136,1)', // Color de la segunda área
      borderColor: 'rgba(0,150,136,1)', // Color de la línea
      pointBackgroundColor: 'rgba(0,150,136,1)',
      fill: true,
      tension: 0.4,
    },
    {
      data: [200, 250, 300, 250, 300], // Datos para la tercera ola
      label: 'Page Views',
      backgroundColor: 'rgba(255,193,7,1)', // Color de la tercera área
      borderColor: 'rgba(255,193,7,1)', // Color de la línea
      pointBackgroundColor: 'rgba(255,193,7,1)',
      fill: true,
      tension: 0.4,
    },
  ];
}
