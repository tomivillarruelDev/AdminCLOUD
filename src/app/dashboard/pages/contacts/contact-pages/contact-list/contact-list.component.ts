import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactListComponent { }
