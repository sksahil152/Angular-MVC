import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'SAWeb-angular';
  //set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  myFormGroup : FormGroup | undefined;
  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      name : new FormControl("")
    });
  }
}
