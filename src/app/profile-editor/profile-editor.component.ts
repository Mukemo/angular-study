import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss',
})
export class ProfileEditorComponent implements OnInit {
  // profilForm = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //   }),
  // });

  profilForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

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
