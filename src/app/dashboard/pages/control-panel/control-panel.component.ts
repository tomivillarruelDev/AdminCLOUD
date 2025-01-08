import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { MenuService } from '@shared/services/menu.service';

import {
  LanguageSelectorComponent,
  VerticalBarChartComponent,
} from '@shared/components';
import { HorizonCardComponent } from '@shared/components';
import { PieChartComponent } from '@shared/components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    HorizonCardComponent,
    VerticalBarChartComponent,
    PieChartComponent,
    TranslateModule,
    LanguageSelectorComponent,
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
}
