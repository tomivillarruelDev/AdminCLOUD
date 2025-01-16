import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-businesses',
  standalone: true,
  imports: [],
  templateUrl: './businesses.component.html',
  styleUrl: './businesses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BusinessesComponent { }
