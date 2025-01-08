import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public isMobile = signal(window.innerWidth <= 768);

  updateIsMobile(): void {
    this.isMobile.set(window.innerWidth <= 768);
  }
}
