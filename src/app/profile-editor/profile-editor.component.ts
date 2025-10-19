import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss',
})
export class ProfileEditorComponent implements OnInit {
  // profilForm = new FormGroup({
  //   firstName: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(5),
  //     Validators.maxLength(5),
  //   ]),
  //   lastName: new FormControl('', Validators.required),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //   }),
  //   aliases: new FormArray([]),
  // });

  get firstName() {
    return this.profilForm.get('firstName');
  }

  get lastName() {
    return this.profilForm.get('lastName');
  }

  profilForm = this.fb.group(
    {
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength,
          Validators.minLength,
          this.forbiddenNameValidator(),
        ],
      ],
      lastName: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
      }),
      password: [''],
      confirm: [''],
      aliases: this.fb.array([this.fb.control('')]),
    },
    { validators: this.passwordMatchValidator() }
  );

  //custom validator creation
  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control) {
        return null;
      }
      const isForbidden = control.value === 'david';
      if (isForbidden) {
        return { isForbidden: { value: control.value } };
      }
      return null;
    };
  }
  //ccustom Password Match Validator
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const group = control as FormGroup;
      const password = group.get('password');
      const confirm = group.get('confirm');

      if (!password || !confirm) {
        return null;
      }
      if (password.value !== confirm.value) {
        return { nomatch: true };
      }

      return null;
    };
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  get aliases() {
    return this.profilForm.get('aliases') as FormArray;
  }
  onSubmit() {
    console.log(this.profilForm.value);
  }
}
