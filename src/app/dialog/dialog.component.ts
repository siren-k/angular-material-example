import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialog.close();
    }, 1000);
  }

}
