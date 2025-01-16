import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PlansComponent {}
