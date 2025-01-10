import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  OnChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="svg-icon"
      [innerHTML]="svgContent"
      [ngClass]="[svgSizeClass(), isHovered() ? 'flip-horizontal' : '']"
    ></div>
  `,
  styleUrl: './svgIcon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent implements OnChanges {
  public isHovered = input<boolean>(false);
  public iconPath = input.required<string>();
  public svgSizeClass = input<string>('h-6 w-6');

  public svgContent: SafeHtml | null = null;

  private sanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);

  ngOnChanges(): void {
    if (this.iconPath) {
      this.loadSvg(this.iconPath());
    }
  }

  private async loadSvg(path: string): Promise<void> {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load SVG: ${response.statusText}`);
      }
      const svgText = await response.text();
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgText);

      this.cdr.markForCheck();
    } catch (error) {
      console.error('Error loading SVG:', error);
    }
  }
}
