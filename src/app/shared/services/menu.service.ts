import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public isMobile = signal(window.innerWidth <= 1024);

  updateIsMobile(): void {
    this.isMobile.set(window.innerWidth <= 1024);
  }
}
