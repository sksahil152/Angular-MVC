import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnswerService } from '../answer.service';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent implements OnInit {
  //set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  myFormGroup: any;
  mode: string | undefined;
  @Output() sendAnswer = new EventEmitter<any>()
  answers: any;
  constructor(private _fb: FormBuilder, private _answerSvc: AnswerService) { }
  ngOnInit(): void {
    this.myFormGroup = this._fb.group({
      name: ['']
    });
    this.mode = 'edit';
  }
  onEdit(){
    this.mode = 'edit';
    this.myFormGroup.patchValue(this.answers)
  }
  onSubmit() {
    if (!this.myFormGroup.valid) {
      return;
    }
    this._answerSvc.saveAnswer(this.myFormGroup.controls['name'].value)
      .pipe(take(1),
        finalize(() => {
          this.mode = 'view'
        })
      )
      .subscribe((res) => { console.log(res);this.answers = res });
  }
}
