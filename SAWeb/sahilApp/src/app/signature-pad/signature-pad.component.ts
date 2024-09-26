import { Component, EventEmitter, OnInit, Output, output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SignaturePad } from 'ngx-signaturepad/signature-pad';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrl: './signature-pad.component.scss'
})
export class SignaturePadComponent implements OnInit {
    @ViewChild(SignaturePad) signaturePad!: SignaturePad;
    signatureImg: string | null = null;

    signaturePadOptions: Object = { // Customize options
        minWidth: 1,
        maxWidth: 3,
        penColor: "rgb(66, 133, 244)",
        canvasWidth: 500,
        canvasHeight: 300
      };
  constructor() { }
  ngOnInit(): void {
  }
  // Triggered when signature is completed
  drawComplete() {
    console.log('Signature completed');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  saveSignature() {
    if (this.signaturePad.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      this.signatureImg = this.signaturePad.toDataURL();
      console.log(this.signatureImg); // Logs the signature as a base64 string
    }
  }
}
