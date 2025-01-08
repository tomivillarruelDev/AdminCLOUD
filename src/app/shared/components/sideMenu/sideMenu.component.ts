import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { routes } from '../../../dashboard/dashboard.routes';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { filter } from 'rxjs';

import { MenuService } from '@shared/services/menu.service';
import { SvgIconComponent } from '@shared/components';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule, SvgIconComponent],
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements AfterViewInit {
  private router = inject(Router);
  private menuService = inject(MenuService);

  @ViewChildren('menuItem') menuItems!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  public isHovered = false;
  public menuItemsData = this.getMenuItemsData();
  public isMenuOpen = false;
  public isMenuOverlay = false;

  get isMobile() {
    return this.menuService.isMobile();
  }

  ngAfterViewInit(): void {
    this.setupRouterEvents();
    setTimeout(() => this.scrollToActiveItem(), 100);
    window.addEventListener('resize', () => this.menuService.updateIsMobile());
  }

  public onMouseEnter(menuItem: any): void {
    menuItem.isHovered = true;
  }

  public onMouseLeave(menuItem: any): void {
    menuItem.isHovered = false;
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOverlay = this.isMenuOpen && this.isMobile;
  }

  private getMenuItemsData(): any[] {
    return routes
      .flatMap(route => route.children ?? [])
      .filter(
        route => !route.path?.includes(':') && !route.path?.includes('**')
      )
      .map(route => ({ ...route, isHovered: false }));
  }

  private setupRouterEvents(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => setTimeout(() => this.scrollToActiveItem(), 100));
  }

  private scrollToActiveItem(): void {
    const activeItem = this.menuItems.find(item =>
      item.nativeElement.querySelector('a.text-primary')
    );

    if (activeItem) {
      activeItem.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }
}
