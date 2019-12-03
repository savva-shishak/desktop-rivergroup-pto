import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormEmplComponent } from '../form-empl/form-empl.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipment } from 'src/app/types';

@Component({
  selector: 'app-form-equip',
  templateUrl: './form-equip.component.html',
  styleUrls: ['./form-equip.component.scss']
})
export class FormEquipComponent {

  constructor(
    private dialog: MatDialogRef<FormEmplComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Equipment,
    private formBuilder: FormBuilder
  ) { }

  public form = this.formBuilder.group({
    name:         [this.data.name, [Validators.required]],
    numInventory: [this.data.numInventory, [Validators.required]],
    model:        [this.data.model, [Validators.required]],
    numModel:     [this.data.numModel, [Validators.required]],
    serialNum:    [this.data.serialNum, [Validators.required]]
  });

  public submit() {
    const c = this.form.value;

    this.data.name         = c.name;
    this.data.numInventory = c.numInventory;
    this.data.model        = c.model;
    this.data.numModel     = c.numModel;
    this.data.serialNum    = c.serialNum;

    this.dialog.close(this.data);
  }

  public close() {
    this.dialog.close();
  }
}
