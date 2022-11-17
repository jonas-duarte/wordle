import { InputManager, KeyStatus } from 'src/domain/input-manager';
import {
  Component,
  OnInit,
  Input,
  HostListener,
  // ViewChildren,
  // QueryList,
  // ElementRef,
} from '@angular/core';
// import { shake } from 'src/animations/shake';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Input() inputManager!: InputManager;
  // @ViewChildren('keyboard') keyboard!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {
    // this.inputManager.onInvalidWord(() => {
    //   shake(this.keyboard.first.nativeElement);
    // });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.inputManager.handleKey(event.key);
  }

  handleKeyClick(key: string) {
    this.inputManager.handleKey(key);
  }

  keyClass(key: string): string {
    if (key === 'ENTER' || key === 'BACKSPACE') {
      return 'special';
    }
    const status: KeyStatus | 'undefined' =
      this.inputManager.getHigherKeyStatus(key) || 'undefined';
    return status;
  }
}
