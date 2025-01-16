import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-incentive-list',
  standalone: true,
  imports: [],
  templateUrl: './incentive-list.component.html',
  styleUrl: './incentive-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IncentiveListComponent { }
