import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SvgIconComponent } from '@shared/components';
import { Icon, Title } from '@shared/interfaces';
import { StatisticsIndicatorComponent } from '../statistics-indicator/statistics-indicator.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-horizon-card',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    StatisticsIndicatorComponent,
    TranslateModule,
  ],
  templateUrl: './horizon-card.component.html',
  styleUrl: './horizon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizonCardComponent {
  public customClasses = input<string>();

  public cardTitle = input<Title>();

  public cardIcon = input<Icon>();

  public statisticsIndicator = input<boolean>(false);
}
