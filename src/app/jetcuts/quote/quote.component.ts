import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ConnectionService } from '../connection-service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  disabledSubmitButton = false;

  contactForm = new FormGroup({
    contactFormName: new FormControl(null, Validators.required),
    contactFormEmail: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
    contactFormMessage: new FormControl(),
    contactFormFile: new FormControl(null, Validators.required),
    contactFormNumber: new FormControl(null, Validators.required)
    // image: new FormControl(null, Validators.required)
  });

  @HostListener('input') oninput() {
    console.log(this.contactForm.valid);
    if (this.contactForm.valid) {
      this.disabledSubmitButton = true;
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private connectionService: ConnectionService,
    private http: HttpClient
  ) {}

  onSubmit() {
    console.log(this.contactForm.value);

    this.connectionService.sendMessage1(this.toFormData(this.contactForm.value)).subscribe(
      () => {
        if (this.contactForm.valid) {
          console.log('Form Submitted!');
          this.contactForm.reset();
        }
        // alert('Your message has been sent.');
        // this.contactForm.reset();
        // this.disabledSubmitButton = true;
      },
      error => {
        console.log('Error', error);
        this.contactForm.reset();
      }
    );
  }

  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }
}
