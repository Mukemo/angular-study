import { Directive } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  FormGroup,
  NG_VALIDATORS,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PasswordMatchDirective,
    },
  ],
})
export class PasswordMatchDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    // const group = control as FormGroup;
    const password = control.get('password');
    const confirm = control.get('confirm');

    if (!password || !confirm) {
      return null;
    }
    if (password.value !== confirm.value) {
      return { nomatch: true };
    }

    return null;
  }
}
