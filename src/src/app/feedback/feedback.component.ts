import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'feedback-component',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  @ViewChild("md")
  md: ModalDialogComponent;
  result: string;
  selectedValues = [];
  questions = [{
    statement: "AAA",
    options: [
      { text: "A1", isSelected: false },
      { text: "A2", isSelected: false },
      { text: "A3", isSelected: false }],
    useroption: []
  },
  {
    statement: "BBB",
    options: [{ text: "B1", isSelected: false },
    { text: "B2", isSelected: false },
    { text: "B3", isSelected: false },
    { text: "B4", isSelected: false }],
    useroption: []
  }
  ];

  submit() {    
    for (let ques of this.questions) {
      for (let opt of ques.options) {
        if (opt.isSelected) {
          this.selectedValues.push(opt.text);
        }
      }
    }
    this.result = `You checked ${this.selectedValues}`;
    this.md.show();
  }

  cancel() {
    for (let ques of this.questions) {
      for (let opt of ques.options) {        
          opt.isSelected = false;
        }
      }    
    this.selectedValues = [];
  }
}
