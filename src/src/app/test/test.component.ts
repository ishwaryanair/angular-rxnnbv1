import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @ViewChild("md")
  md: ModalDialogComponent;

  result:string;
  questions = [{
    statement: "AAA", option1: "A1", option2: "A2", option3: "A3", option4: "A4", correct: 1, useroption: 0
  },
  { statement: "BBB", option1: "A1", option2: "A2", option3: "A3", option4: "A4", correct: 1, useroption: 0 },
  { statement: "CCC", option1: "A1", option2: "A2", option3: "A3", option4: "A4", correct: 1, useroption: 0 },
  { statement: "DDD", option1: "A1", option2: "A2", option3: "A3", option4: "A4", correct: 1, useroption: 0 }
  ]

  finish() {
    var userMarks = 0;
    for (let question of this.questions) {
      if (question.useroption == question.correct) {
        userMarks += 2;
      }
    }
    this.result = `You obtained ${userMarks} out of ${(this.questions.length*2)}`;
    this.md.show();
  }
}
