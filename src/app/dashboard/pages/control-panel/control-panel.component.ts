import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { MenuService } from '@shared/services/menu.service';

import {
  LanguageSelectorComponent,
  VerticalBarChartComponent,
} from '@shared/components';
import { HorizonCardComponent } from '@shared/components';
import { PieChartComponent } from '@shared/components/pie-chart/pie-chart.component';
import { CardListComponent } from '@shared/components/card-list/card-list.component';
import { UserStatus } from '@shared/interfaces';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    HorizonCardComponent,
    VerticalBarChartComponent,
    PieChartComponent,
    TranslateModule,
    LanguageSelectorComponent,
    CardListComponent,
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlPanelComponent {
  private menuService = inject(MenuService);

  get isMobile(): boolean {
    return this.menuService.isMobile();
  }

  users = [
    { text: 'User 1', status: UserStatus.Success },
    { text: 'User 2', status: UserStatus.Warning },
    { text: 'User 3', status: UserStatus.Error },
    { text: 'User 4', status: UserStatus.Success },
    { text: 'User 5' },
  ];
}
