import { Component, ViewChild, ElementRef, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'modal-dialog-component',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {

  @ViewChild("modal")
  modal: ElementRef;

  @Input()
  title: string;
  
  @Input()
  message: string;
  
  public show() {
    $(this.modal.nativeElement).modal();
  }

  delete() {

  }

  cancel()
  {
    
  }
}
