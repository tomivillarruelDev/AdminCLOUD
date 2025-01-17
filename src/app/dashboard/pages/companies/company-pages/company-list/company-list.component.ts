import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CompanyListComponent {}
