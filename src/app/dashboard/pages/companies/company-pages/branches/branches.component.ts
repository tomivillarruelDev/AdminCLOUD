import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BranchesComponent {

}
