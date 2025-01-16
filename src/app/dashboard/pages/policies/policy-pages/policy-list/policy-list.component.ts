import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-policy-list',
  standalone: true,
  imports: [],
  templateUrl: './policy-list.component.html',
  styleUrl: './policy-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PolicyListComponent {

}
