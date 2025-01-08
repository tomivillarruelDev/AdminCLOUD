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
import { AnimationSpec } from 'chart.js';

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
  public barChartColors = input<string[]>([
    'rgba(255, 111, 97, 1)',
    'rgba(0, 133, 194, 1)',
  ]);
  public displayDataLabels = input<boolean>(true);
  public shouldSplitLabels = input<boolean>(false);

  private menuService = inject(MenuService);

  constructor() {
    Chart.register(ChartDataLabels);
  }

  get isMobile(): boolean {
    return this.menuService.isMobile();
  }

  public chartData = computed<ChartConfiguration['data']>(() => ({
    labels: this.barChartLabels(),
    datasets: [this.createDataset()],
  }));

  public barChartOptions = computed<ChartOptions>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: this.createScales(),
    animation: this.createAnimation(),
    plugins: this.createPlugins(),
  }));

  private createDataset = computed(() => {
    return {
      label: this.barChartTitle(),
      data: this.barChartData(),
      backgroundColor: this.createGradient(),
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
      shadowOffsetX: 2,
      shadowOffsetY: 4,
      shadowBlur: 6,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
    };
  });

  private createGradient() {
    return (context: any) => {
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
    };
  }

  private createScales = computed(() => {
    return {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 10, family: 'Poppins', weight: 600 },
          color: this.textColorChart(),
          callback: (value: string | number, index: number) =>
            this.shouldSplitLabels()
              ? this.splitLabel(
                  this.barChartLabels()[index] || value.toString()
                )
              : this.barChartLabels()[index] || value.toString(),

          maxRotation: 0,
        },
      },
      y: {
        display: !this.isMobile,
        beginAtZero: true,
        grid: { display: false },
        ticks: {
          font: { size: 9, family: 'Poppins' },
          color: this.textColorChart(),
          callback: (value: number | string) =>
            typeof value === 'number' ? '$' + value.toLocaleString() : value,
        },
      },
    };
  });

  private createAnimation = computed<AnimationSpec<'bar'>>(() => {
    return {
      duration: 1000,
      easing: 'easeInOutQuad',
    };
  });

  private createPlugins = computed<ChartOptions['plugins']>(() => {
    return {
      datalabels: {
        display: this.displayDataLabels() || this.isMobile,
        color: this.isMobile ? '#F3F4F6' : this.textColorChart(),
        anchor: this.isMobile ? 'center' : 'end',
        align: this.isMobile ? 'center' : 'top',
        font: { size: this.isMobile ? 8 : 10, family: 'Poppins' },
        formatter: (value: number) => '$' + value.toLocaleString(),
      },
      legend: { display: this.barChartLegend },
      tooltip: {
        animation: { duration: 500 },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        titleColor: 'black',
        bodyColor: 'black',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        callbacks: {
          label: (context: any) => {
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
    };
  });

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
