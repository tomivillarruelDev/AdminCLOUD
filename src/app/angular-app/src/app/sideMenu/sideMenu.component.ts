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
import { SvgIconComponent } from '../svgIcon/svgIcon.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule, SvgIconComponent],
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements AfterViewInit {
  private router = inject(Router);

  @ViewChildren('menuItem') menuItems!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  public isHovered = false;
  public menuItemsData = this.getMenuItemsData();
  public isMobile = window.innerWidth < 768; // Determina si es pantalla pequeña

  ngAfterViewInit(): void {
    this.setupRouterEvents();
    setTimeout(() => this.scrollToActiveItem(), 100);
  }

  public onMouseEnter(menuItem: any): void {
    menuItem.isHovered = true;
  }

  public onMouseLeave(menuItem: any): void {
    menuItem.isHovered = false;
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
