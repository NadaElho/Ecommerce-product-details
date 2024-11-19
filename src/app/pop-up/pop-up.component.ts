import {
  Component,
  input,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [ImageContainerComponent, CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent {
  close = output<boolean>();
  activeImageNum = input<number>();
  isActive = input<boolean>();
  changeNum = output<number>();

  onClose() {
    this.close.emit(false);
  }
  handleData(nn: number) {
    this.changeNum.emit(nn);
  }
}
