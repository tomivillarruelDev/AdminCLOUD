import { Component, inject } from '@angular/core';
import { VerticalBarChartComponent } from '@shared/components';
import { HorizonCardComponent } from '@shared/components/horizon-card/horizon-card.component';
import { MenuService } from '@shared/services/menu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HorizonCardComponent, VerticalBarChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  private menuService = inject(MenuService);

  get isMobile(): boolean {
    return this.menuService.isMobile();
  }
}
