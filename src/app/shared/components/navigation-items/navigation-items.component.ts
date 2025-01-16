import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SvgIconComponent } from '@shared/components';
import { NavigationItem } from '@shared/interfaces/navigation-item.interface';

@Component({
  selector: 'app-navigation-items',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgIconComponent, TranslatePipe],
  templateUrl: './navigation-items.component.html',
  styleUrl: './navigation-items.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItems {
  public routes = input.required<Route[]>();

  public navigationItems = computed<NavigationItem[]>(() => {
    const mainRoutes = this.routes();
    return this.filterNavigableRoutes(mainRoutes);
  });

  private filterNavigableRoutes(routes: Route[]): NavigationItem[] {
    return routes
      .filter(this.isValidNavigationRoute)
      .map(this.mapToNavigationItem);
  }

  private isValidNavigationRoute = (route: Route): boolean => {
    return Boolean(
      route.path &&
        route.title &&
        !route.redirectTo &&
        !this.isDynamicRoute(route)
    );
  };

  private mapToNavigationItem = (route: Route): NavigationItem => ({
    path: route.path!,
    title: route.title?.toString() ?? '',
    data: route.data ?? {},
  });

  private isDynamicRoute(route: Route): boolean {
    return route.path?.includes(':') ?? false;
  }
}
