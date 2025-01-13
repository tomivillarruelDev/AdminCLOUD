import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';

import { MenuService } from '@shared/services/menu.service';

import {
  LanguageSelectorComponent,
  VerticalBarChartComponent,
  HorizonCardComponent,
  PieChartComponent,
  UserCardListComponent,
  StatisticWidgetComponent,
  TableComponent,
} from '@shared/components';
import { UserStatus } from '@shared/interfaces';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    HorizonCardComponent,
    VerticalBarChartComponent,
    PieChartComponent,
    TranslatePipe,
    LanguageSelectorComponent,
    UserCardListComponent,
    StatisticWidgetComponent,
    TableComponent,
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

  users = {
    data: [
      { name: 'Juan Pérez', status: UserStatus.Online },
      { name: 'María García', status: UserStatus.Busy },
      { name: 'Carlos Rodríguez', status: UserStatus.Offline },
      { name: 'Ana Fernández', status: UserStatus.Online },
      { name: 'Luis Gómez', status: UserStatus.Busy },
      { name: 'Sofía Martínez', status: UserStatus.Offline },
      { name: 'Miguel Torres', status: UserStatus.Online },
      { name: 'Lucía Ramírez', status: UserStatus.Busy },
      { name: 'Javier Sánchez', status: UserStatus.Offline },
    ],
  };
}
