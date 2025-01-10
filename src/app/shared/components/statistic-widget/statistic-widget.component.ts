import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SvgIconComponent } from '@shared/components';
import { StatisticWidget } from '@shared/interfaces';

@Component({
  selector: 'app-statistic-widget',
  standalone: true,
  imports: [SvgIconComponent, TranslateModule, CurrencyPipe],
  templateUrl: './statistic-widget.component.html',
  styleUrl: './statistic-widget.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticWidgetComponent {
  public widgets = input<StatisticWidget[]>();
}