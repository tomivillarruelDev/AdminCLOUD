import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pending-commissions',
  standalone: true,
  imports: [],
  templateUrl: './pending-commissions.component.html',
  styleUrl: './pending-commissions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PendingCommissionsComponent {

}
