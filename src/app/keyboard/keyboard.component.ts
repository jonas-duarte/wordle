import { InputManager, KeyStatus } from 'src/domain/input-manager';
import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Input() inputManager!: InputManager;

  constructor() {}

  ngOnInit(): void {}

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
