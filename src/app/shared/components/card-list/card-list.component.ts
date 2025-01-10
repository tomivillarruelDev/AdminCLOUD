import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HorizonCardComponent } from '@shared/components';
import { SvgIconComponent } from '@shared/components';
import { Icon, ItemList, Title, UserStatus } from '@shared/interfaces';

interface CardListItem {
  iconText: string;
  text: string;
  status: string;
  customClasses?: string;
  iconClasses?: string;
  statusClasses?: string;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    HorizonCardComponent,
    TranslateModule,
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  public cardTitle = input.required<Title>();

  public cardIcon = input<Icon>();
  public horizonCardCustomClasses = input<string>('');

  public items = input<ItemList[]>([]);

  public getStatusText(status: string): string {
    switch (status) {
      case UserStatus.Success:
        return 'Connected';
      case UserStatus.Warning:
        return 'Busy';
      case UserStatus.Error:
        return 'Disconnected';
      default:
        return 'Unknown';
    }
  }
}
