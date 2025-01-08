import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

import { MenuService } from '@shared/services/menu.service';

import {
  LanguageSelectorComponent,
  VerticalBarChartComponent,
} from '@shared/components';
import { HorizonCardComponent } from '@shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HorizonCardComponent,
    VerticalBarChartComponent,
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
