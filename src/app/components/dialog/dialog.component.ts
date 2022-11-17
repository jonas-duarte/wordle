import { Component, OnInit } from '@angular/core';
import { DialogServiceHandler } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [DialogServiceHandler],
})
export class DialogComponent implements OnInit {
  constructor(private dialogService: DialogServiceHandler) {}

  isOpen: boolean = false;
  title: string | null = null;
  body: string | null = null;

  ngOnInit(): void {
    this.dialogService.onShow((dialog) => {
      this.isOpen = true;
      this.title = dialog.title;
      this.body = dialog.message;
    });
  }

  closeDialog() {
    this.isOpen = false;
    this.title = null;
    this.body = null;
  }
}
