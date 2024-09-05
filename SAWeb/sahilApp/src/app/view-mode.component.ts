import { Component, Input, OnInit, output } from "@angular/core";

@Component({
    selector: 'app-view-mode',
    templateUrl: './view-mode.component.html',
})
export class viewModeComponent implements OnInit {

    @Input() answers: any;
    ngOnInit(): void {

    }
}