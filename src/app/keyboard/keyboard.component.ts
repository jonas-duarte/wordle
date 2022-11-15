import { InputManager, KeyStatus } from 'src/domain/input-manager';
import {
  Component,
  OnInit,
  Input,
  HostListener,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

const SHAKE_KEYFRAMES = [
  { transform: 'translate3d(-1px, 0, 0)' },
  { transform: 'translate3d(2px, 0, 0)' },
  { transform: 'translate3d(-4px, 0, 0)' },
  { transform: 'translate3d(4px, 0, 0)' },
  { transform: 'translate3d(0, 0, 0)' },
];

const SHAKE_OPTIONS = {
  duration: 350,
  iterations: 1,
  easing: 'linear',
  direction: 'alternate',
  fill: 'forwards',
};

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Input() inputManager!: InputManager;
  @ViewChildren('keyboard') keyboard!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {
    this.inputManager.onInvalidWord((word) => {
      this.keyboard.first.nativeElement.animate(SHAKE_KEYFRAMES, SHAKE_OPTIONS);
    });
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
