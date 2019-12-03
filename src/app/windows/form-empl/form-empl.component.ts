import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empl } from 'src/app/types';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-empl',
  templateUrl: './form-empl.component.html',
  styleUrls: ['./form-empl.component.scss']
})
export class FormEmplComponent {

  constructor(
    private dialog: MatDialogRef<FormEmplComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Empl,
    private formBuilder: FormBuilder
  ) { }

  emplForm = this.formBuilder.group({
    snp:                 [this.getSNPGroup(),            [Validators.required, this.SNPValidator]],
    tabelNumber:         [this.data.tabelNumber,         [Validators.required]],
    phone:               [this.data.phone,               [Validators.required]],
    placeOfResidence:    [this.data.placeOfResidence,    [Validators.required]],
    placeOfRegistration: [this.data.placeOfRegistration, [Validators.required]],
    subdivision:         [this.data.subdivision,         [Validators.required]],
  });

  submit() {
    this.setSurnameNamePatronymicInData();

    this.setTabelNumberPhoneCitySubdivisionInData();

    this.dialog.close(this.data);
  }

  close() {
    this.dialog.close();
  }

  private SNPValidator(control: FormControl): {[s: string]: boolean} {
    const value = control.value.trim();

    if (value.length === 0) {
      return null;
    }

    if (value.split(' ').length !== 3) {
      return {snp: true};
    }

    return null;
  }

  getSNPGroup(): string {
    if (this.data.surname.trim() === '') {
      return '';
    }

    return this.data.surname + ' ' + this.data.name + ' ' + this.data.patronymic;
  }

  setSurnameNamePatronymicInData(): void {
    [this.data.surname, this.data.name, this.data.patronymic] = this.emplForm.controls.snp.value.split(' ');
  }

  setTabelNumberPhoneCitySubdivisionInData() {
    const c =  this.emplForm.controls;

    this.data.tabelNumber         = c.tabelNumber.value;
    this.data.phone               = c.phone.value;
    this.data.placeOfResidence    = c.placeOfResidence.value;
    this.data.subdivision         = c.subdivision.value;
    this.data.placeOfRegistration = c.placeOfRegistration.value;
  }
}
