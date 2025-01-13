import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { SvgIconComponent } from '@shared/components';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  template: `
    <app-svg-icon
    iconPath="/icons/loader.svg"
    svgSizeClass="h-20 w-20"
    class="text-secondary full-screen"
    ></app-svg-icon>
  `,
  styles: `
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 9999;
    }
    .full-screen {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {

  ngOnInit(): void { }

}
