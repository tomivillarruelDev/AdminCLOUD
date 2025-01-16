import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-quotations-list',
  standalone: true,
  imports: [],
  templateUrl: './quotations-list.component.html',
  styleUrl: './quotations-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QuotationsListComponent { }
