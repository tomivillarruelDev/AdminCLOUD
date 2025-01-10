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
import { AnimationSpec } from 'chart.js';

import { MenuService } from '@shared/services/menu.service';
import { BarChart } from '@shared/interfaces';

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

  public barChart = input.required<BarChart>();

  private menuService = inject(MenuService);

  constructor() {
    Chart.register(ChartDataLabels);
  }

  get isMobile(): boolean {
    return this.menuService.isMobile();
  }

  public chartData = computed<ChartConfiguration['data']>(() => ({
    labels: this.barChart().chartLabels,
    datasets: [this.createDataset()],
  }));

  public barChartOptions = computed<ChartOptions>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: this.createScales(),
    animation: this.createAnimation(),
    plugins: this.createPlugins(),
  }));

  private createDataset = computed(() => ({
    label: this.barChart().chartTitle,
    data: this.barChart().chartData,
    backgroundColor: this.createGradient(),
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 10,
    borderSkipped: false,
    shadowOffsetX: 2,
    shadowOffsetY: 4,
    shadowBlur: 6,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
  }));

  private createGradient() {
    return (context: any) => {
      const { ctx, chartArea } = context.chart;
      if (!chartArea) return;

      const gradient = ctx.createLinearGradient(
        chartArea.left,
        chartArea.top,
        chartArea.right,
        chartArea.bottom
      );
      gradient.addColorStop(0, this.barChart().chartColors[0]);
      gradient.addColorStop(1, this.barChart().chartColors[1]);

      return gradient;
    };
  }

  private createScales = computed(() => ({
    x: this.createXAxisOptions(),
    y: this.createYAxisOptions(),
  }));

  private createXAxisOptions() {
    return {
      grid: { display: false },
      ticks: {
        font: {
          size: this.barChart().chartLabelsSize || 10,
          family: 'Poppins',
          weight: 600,
        },
        color: this.barChart().textColorChart || 'rgba(0, 0, 0, 0.8)',
        callback: (value: string | number, index: number) =>
          this.barChart().shouldSplitLabels
            ? this.splitLabel(
                this.barChart().chartLabels[index] || value.toString()
              )
            : this.barChart().chartLabels[index] || value.toString(),
        maxRotation: 0,
      },
    };
  }

  private createYAxisOptions() {
    return {
      display: !this.isMobile,
      beginAtZero: true,
      grid: { display: false },
      ticks: {
        font: { size: 9, family: 'Poppins' },
        color: this.barChart().textColorChart || 'rgba(0, 0, 0, 0.8)',
        callback: (value: number | string) =>
          typeof value === 'number' ? '$' + value.toLocaleString() : value,
      },
    };
  }

  private createAnimation = computed<AnimationSpec<'bar'>>(() => ({
    duration: 1000,
    easing: 'easeInOutQuad',
  }));

  private createPlugins = computed<ChartOptions['plugins']>(() => ({
    datalabels: this.createDataLabelsOptions(),
    legend: { display: this.barChartLegend },
    tooltip: this.createTooltipOptions(),
  }));

  private createDataLabelsOptions() {
    return {
      display: this.barChart().displayDataLabels || this.isMobile,
      color: this.isMobile
        ? '#F3F4F6'
        : this.barChart().textColorChart || 'rgba(0, 0, 0, 0.8)',
      anchor: this.isMobile ? ('center' as const) : ('end' as const),
      align: this.isMobile ? ('center' as const) : ('top' as const),
      font: { size: this.isMobile ? 8 : 10, family: 'Poppins' },
      formatter: (value: number) => '$' + value.toLocaleString(),
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

  private tooltipLabelFormatter(context: any) {
    let label = context.dataset.label || '';
    if (label) {
      label += ': ';
    }
    if (context.parsed.y !== null) {
      label += '$' + context.parsed.y.toLocaleString();
    }
    return label;
  }

  private splitLabel(label: string): string[] {
    const words = label.split(' ');
    const result: string[] = [];
    let temp = '';

    words.forEach(word => {
      if (word.length > 10) {
        word = word.substring(0, 4) + '.';
      }
      if (temp.length + word.length + 1 <= 10) {
        temp += (temp ? ' ' : '') + word;
      } else {
        if (temp) result.push(temp);
        temp = word;
      }
    });

    if (temp) result.push(temp);
    return result;
  }
}
