import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';

import { SvgIconComponent } from '@shared/components';
import { StatisticsIndicatorComponent } from '../statistics-indicator/statistics-indicator.component';
import { Icon, Title } from '@shared/interfaces';

@Component({
  selector: 'app-horizon-card',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    StatisticsIndicatorComponent,
    TranslatePipe,
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
