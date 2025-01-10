import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Table } from '@shared/interfaces';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesComponent {

  public table = input.required<Table>();
}
