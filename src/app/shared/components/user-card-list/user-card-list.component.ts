import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { HorizonCardComponent } from '@shared/components';
import { SvgIconComponent } from '@shared/components';
import { Icon, ItemListUser, Title } from '@shared/interfaces';

interface CardListItem {
  iconText: string;
  text: string;
  status: string;
  customClasses?: string;
  iconClasses?: string;
  statusClasses?: string;
}

@Component({
  selector: 'app-user-card-list',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    HorizonCardComponent,
    TranslatePipe,
  ],
  templateUrl: './user-card-list.component.html',
  styleUrl: './user-card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardListComponent {
  public cardTitle = input.required<Title>();
  public cardIcon = input<Icon>();

  public horizonCardCustomClasses = input<string>();
  public customClasses = input<string>();

  public items = input.required<ItemListUser>();

  getInitials(name: string): string {
    const names = name.split(' ');
    const initials = names.map(n => n.charAt(0).toUpperCase()).join('');
    return initials.length > 2 ? initials.slice(0, 2) : initials;
  }
}
