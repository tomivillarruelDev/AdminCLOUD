import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-riders',
  standalone: true,
  imports: [],
  templateUrl: './riders.component.html',
  styleUrl: './riders.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RidersComponent {}
