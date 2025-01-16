import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cash-flow-list',
  standalone: true,
  imports: [],
  templateUrl: './cash-flow-list.component.html',
  styleUrl: './cash-flow-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CashFlowListComponent { }
