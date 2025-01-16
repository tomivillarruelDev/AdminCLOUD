import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-agencies',
  standalone: true,
  imports: [],
  templateUrl: './agencies.component.html',
  styleUrl: './agencies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AgenciesComponent { }
