import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TransactionsComponent {

}
