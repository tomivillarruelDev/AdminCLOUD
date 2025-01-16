import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-claims-list',
  standalone: true,
  imports: [],
  templateUrl: './claims-list.component.html',
  styleUrl: './claims-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ClaimsListComponent {

}
