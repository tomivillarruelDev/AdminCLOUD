import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-agreements',
  standalone: true,
  imports: [],
  templateUrl: './agreements.component.html',
  styleUrl: './agreements.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AgreementsComponent { }
