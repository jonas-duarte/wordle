import { EventEmitter } from 'events';
import { Injectable } from '@angular/core';

interface Dialog {
  title: string;
  message: string;
}

const events: EventEmitter = new EventEmitter();
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  show(dialog: Dialog) {
    events.emit('dialog:show', dialog);
  }
}

@Injectable({
  providedIn: 'root',
})
export class DialogServiceHandler {
  onShow(callback: (dialog: Dialog) => void) {
    events.on('dialog:show', callback);
  }
}
