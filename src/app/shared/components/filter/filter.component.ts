import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FilterComponent {}
