import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SvgIconComponent } from '@shared/components';

@Component({
  selector: 'app-horizon-card',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './horizon-card.component.html',
  styleUrl: './horizon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizonCardComponent {
  public customClasses = input<string>('');

  public cardTitle = input.required<string>();
  public cardTitleClasses = input<string>('text-[#1B254B]');
  public cardIconPath = input.required<string>();
  public cardIconClass = input<string>('p-2 rounded-[20px]');
}
