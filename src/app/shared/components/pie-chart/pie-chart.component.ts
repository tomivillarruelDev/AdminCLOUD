import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MenuService } from '@shared/services/menu.service';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent {
  public pieChartType: ChartType = 'pie';

  public pieChartTitle = input.required<string>();
  public pieChartLabels = input.required<string[]>();
  public pieChartData = input.required<number[]>();
  public pieChartHeightChart = input<string>();
  public pieChartColors = input<string[]>([
    'rgba(255, 111, 97, 1)',
    'rgba(0, 133, 194, 1)',
  ]);
  public displayDataLabels = input<boolean>(true);
  public textColorChart = input<string>('rgba(0, 0, 0, 0.8)');

  private menuService = inject(MenuService);

  constructor() {
    Chart.register(ChartDataLabels);
  }

  get isMobile(): boolean {
    return this.menuService.isMobile();
  }

  public chartData = computed<ChartData<'pie'>>(() => ({
    labels: this.pieChartLabels(),
    datasets: [this.createDataset()],
  }));

  public pieChartOptions = computed<ChartConfiguration['options']>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: this.createPlugins(),
  }));

  private createDataset = computed(() => ({
    data: this.pieChartData(),
    backgroundColor: this.createRadialGradient(),
    borderColor: 'transparent',
    borderWidth: 0,
  }));

  private createRadialGradient() {
    return (context: any) => {
      const { ctx, chartArea } = context.chart;
      if (!chartArea) return;

      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const radius = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top) / 2;

      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.3, centerX, centerY, radius);
      gradient.addColorStop(0, this.pieChartColors()[1]);
      gradient.addColorStop(1, this.pieChartColors()[0]);

      return gradient;
    };
  }

  private createPlugins = computed<ChartOptions['plugins']>(() => ({
    legend: this.createLegendOptions(),
    datalabels: this.createDataLabelsOptions(),
    tooltip: this.createTooltipOptions(),
  }));

  private createLegendOptions() {
    return {
      display: true,
      position: 'right' as const, // Cambia el tipo de 'string' a un literal de tipo
      align: 'center' as const, // Cambia el tipo de 'string' a un literal de tipo
      labels: {
        boxWidth: 4,
        boxHeight: 4,
        font: { size: this.isMobile ? 9 : 10, family: 'Poppins' },
        pointStyle: 'circle' as const, // Cambia el tipo de 'string' a un literal de tipo
        usePointStyle: true,
      },

      onHover: this.onLegendHover,
      onLeave: this.onLegendLeave,
    };
  }

  private createDataLabelsOptions() {
    return {
      display: this.displayDataLabels() || this.isMobile,
      color: this.isMobile ? '#F3F4F6' : this.textColorChart(),
      anchor: 'center' as const, // Cambia el tipo de 'string' a un literal de tipo
      align: 'center' as const, // Cambia el tipo de 'string' a un literal de tipo
      font: { size: this.isMobile ? 8 : 10, family: 'Poppins' },
      formatter: this.dataLabelFormatter,
    };
  }

  private createTooltipOptions() {
    return {
      animation: { duration: 500 },
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      titleColor: 'black',
      bodyColor: 'black',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1,
      callbacks: {
        label: this.tooltipLabelFormatter,
      },
    };
  }

  private onLegendHover(event: any) {
    if (event.native && event.native.target) {
      (event.native.target as HTMLElement).style.cursor = 'pointer';
    }
  }

  private onLegendLeave(event: any) {
    if (event.native && event.native.target) {
      (event.native.target as HTMLElement).style.cursor = 'default';
    }
  }

  private dataLabelFormatter(value: number, context: any) {
    const data = context.chart.data.datasets[0].data;
    const total = data.reduce((acc: number, val: number) => acc + val, 0);
    const percentage = ((value / total) * 100).toFixed(1);
    return `${percentage}%`;
  }

  private tooltipLabelFormatter(context: any) {
    let label = context.label || '';
    if (label) {
      label += ': ';
    }
    if (context.raw !== null) {
      label += '$' + context.raw.toLocaleString();
    }
    return label;
  }
}
