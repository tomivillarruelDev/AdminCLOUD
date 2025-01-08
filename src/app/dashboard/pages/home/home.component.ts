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
  selector: 'app-home',
  standalone: true,
  imports: [
    HorizonCardComponent,
    VerticalBarChartComponent,
    PieChartComponent,
    TranslateModule,
    LanguageSelectorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  private menuService = inject(MenuService);

  get isMobile(): boolean {
    return this.menuService.isMobile();
  }
}
