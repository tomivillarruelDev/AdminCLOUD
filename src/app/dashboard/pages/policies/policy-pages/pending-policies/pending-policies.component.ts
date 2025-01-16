import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pending-policies',
  standalone: true,
  imports: [],
  templateUrl: './pending-policies.component.html',
  styleUrl: './pending-policies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PendingPoliciesComponent {

}
