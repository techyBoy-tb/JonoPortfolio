import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from 'src/app/models/enum/error-messages';
import { FormValidation } from 'src/app/utils/form-validation';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }
  public errorMessages = ERROR_MESSAGES;

  private bookDetails: FormGroup = this.fb.group({
    urlExtension: ['', [Validators.required, Validators.pattern(FormValidation.MESSAGE_REGEX)]],
    isbnID: ['', [Validators.required, Validators.pattern(FormValidation.MESSAGE_REGEX)]],
    bookID: ['', [Validators.required, Validators.pattern(FormValidation.MESSAGE_REGEX)]]
  });

  getBookDetails() {
    return this.bookDetails;
  }
}
