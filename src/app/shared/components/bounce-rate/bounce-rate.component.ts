import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bounce-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bounce-rate.component.html',
  styleUrl: './bounce-rate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BounceRateComponent implements OnInit, OnDestroy {
  public currentRateIndex = 0;
  public rates = [{ icon: '', value: '' }];
  private intervalId!: ReturnType<typeof setInterval>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startRateUpdate();
  }

  ngOnDestroy(): void {
    this.clearRateUpdateInterval();
  }

  private startRateUpdate(): void {
    this.updateRates();
    this.intervalId = setInterval(() => {
      this.currentRateIndex = this.getRandomRateIndex();
      this.updateRates();
      this.cdr.detectChanges();
    }, 1000);
  }

  private clearRateUpdateInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private getRandomRateIndex(): number {
    return Math.floor(Math.random() * this.rates.length);
  }

  private getRandomPercentage(): number {
    return parseFloat((Math.random() * 100).toFixed(2));
  }

  private getIcon(percentage: number): string {
    if (percentage > 65) {
      return 'fas fa-arrow-up text-emerald-500';
    } else if (percentage > 40) {
      return 'fas fa-arrow-down text-orange-500';
    } else {
      return 'fas fa-arrow-down text-red-500';
    }
  }

  private updateRates(): void {
    this.rates = this.rates.map(() => {
      const percentage = this.getRandomPercentage();
      return {
        icon: this.getIcon(percentage),
        value: `${percentage}%`
      };
    });
  }
}
