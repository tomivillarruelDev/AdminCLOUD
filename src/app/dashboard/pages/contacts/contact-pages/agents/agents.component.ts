import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AgentsComponent { }
