import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-commissions-list',
  standalone: true,
  imports: [],
  templateUrl: './commissions-list.component.html',
  styleUrl: './commissions-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CommissionsListComponent {

}
