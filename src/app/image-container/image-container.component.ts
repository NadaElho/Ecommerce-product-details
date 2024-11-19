import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css',
})
export class ImageContainerComponent {
  active = output<boolean>();
  isActive = input<boolean>();
  changeNum = output<number>();
  activeImageNum = input<number>();
  activeNumber = 1;

  items = [0, 1, 2, 3];
  onOpen(number: number) {
    this.active.emit(true);
    this.activeNumber = number;
    this.changeNum.emit(number);
  }

  onSlide(rel: 'next' | 'prev') {
    if (rel === 'next') {
      if (this.activeNumber < this.items.length) {
        this.activeNumber++;
      } else {
        this.activeNumber = 1;
      }
    } else {
      if (this.activeNumber > 1) {
        this.activeNumber--;
      } else {
        this.activeNumber = this.items.length;
      }
    }
    this.changeNum.emit(this.activeNumber);
  }
}
