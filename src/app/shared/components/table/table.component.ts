import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Table } from '@shared/interfaces';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TranslateModule, CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

  public table = input.required<Table>();
}
