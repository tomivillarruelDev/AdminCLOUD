import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClaimsComponent { }
