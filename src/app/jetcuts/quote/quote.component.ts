import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConnectionService } from '../connection-service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  contactForm: FormGroup;
  disabledSubmitButton = true;
  uploadedFiles: Array<File>;

  // optionsSelect: Array<any>;

  @HostListener('input') oninput() {
    console.log(this.contactForm.valid);
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])],
      // contactFormSubjects: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
      contactFormCopy: [''],
      contactFormFile: [''],
      contactFormNumber: ['']
    });
  }

  onSubmit() {
    console.log((this.contactForm.value.contactFormFile = this.uploadedFiles[0]));

    for (let i = 0; i < this.uploadedFiles.length; i++) {}
    //   this.contactForm.setValue(this.contactForm.get(contactFormFile, this.uploadedFiles[i]);
    // }

    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles);
  }
}
