import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnswerService } from './answer.service';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  //set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  title = 'sahilApp';
  constructor() { }
  ngOnInit(): void {
  }

}
