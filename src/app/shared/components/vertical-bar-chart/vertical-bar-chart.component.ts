import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
import { MenuService } from '@shared/services/menu.service';

@Component({
  selector: 'app-vertical-bar-chart',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalBarChartComponent {
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartTitle = input.required<string>();
  public barChartLabels = input.required<string[]>();
  public barChartData = input.required<number[]>();
  public heightChart = input<string>();
  public textColorChart = input<string>('rgba(0, 0, 0, 0.8)');
  public barChartColors = input<string[]>(['rgba(255, 111, 97, 1)', 'rgba(0, 133, 194, 1)']);

  public displayDataLabels = input<boolean>(true);

  private menuService = inject(MenuService);

  get isMobile(): boolean {
    return this.menuService.isMobile();
  }

  constructor() {
    Chart.register(ChartDataLabels);
  }

  public chartData = computed<ChartConfiguration['data']>(() => {
    return {
      labels: this.barChartLabels(),

      datasets: [
        {
          label: this.barChartTitle(),
          data: this.barChartData(),
          backgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return;
            }

            const gradient = ctx.createLinearGradient(
              chartArea.left,
              chartArea.top,
              chartArea.right,
              chartArea.bottom
            );
            gradient.addColorStop(0, this.barChartColors()[0]);
            gradient.addColorStop(1, this.barChartColors()[1]);

            return gradient;
          },
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderWidth: 1,
          borderRadius: 10,
          borderSkipped: false,
          shadowOffsetX: 2,
          shadowOffsetY: 4,
          shadowBlur: 6,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
        },
      ],
    };
  });

  public barChartOptions = computed<ChartOptions>(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 10,
              family: 'Poppins',
              weight: 600,
            },
            color: this.textColorChart(),
            maxRotation: 0,
            autoSkip: true,
          },
        },
        y: {
          display: !this.isMobile,
          beginAtZero: true,
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 9,
              family: 'Poppins',
            },
            color: this.textColorChart(),
            callback: function (value: number | string) {
              if (typeof value === 'number') {
                return '$' + value.toLocaleString();
              }
              return value;
            },
          },
        },
      },
      animation: {
        duration: 1000,
        easing: 'easeInOutQuad',
      },
      plugins: {
        datalabels: {
          display: this.displayDataLabels() || this.isMobile,
          color: this.isMobile ? '#F3F4F6' : this.textColorChart(),
          anchor: this.isMobile ? 'center' : 'end',
          align: this.isMobile ? 'center' :'top',
          font: {
            size: this.isMobile ? 8 : 10,
            family: 'Poppins',
          },
          formatter: function (value) {
            return '$' + value.toLocaleString();
          },
        },
        legend: {
          display: this.barChartLegend,
        },
        tooltip: {
          animation: {
            duration: 500,
          },
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          titleColor: 'black',
          bodyColor: 'black',
          borderColor: 'rgba(0, 0, 0, 0.2)',
          borderWidth: 1,
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += '$' + context.parsed.y.toLocaleString();
              }
              return label;
            },
          },
        },
      },
    };
  });
}
