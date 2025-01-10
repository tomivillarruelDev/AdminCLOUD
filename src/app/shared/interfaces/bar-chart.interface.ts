export interface BarChart {
  chartTitle: string;
  chartLabels: string[];
  chartData: number[];

  chartHeight?: string;
  textColorChart?: string;
  chartColors: string[];

  displayDataLabels?: boolean;
  shouldSplitLabels?: boolean;
  chartLabelsSize?: number;
}
