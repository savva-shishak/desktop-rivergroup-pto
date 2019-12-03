import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { FormEquipComponent } from './form-equip/form-equip.component';
import { FormEmplComponent } from './form-empl/form-empl.component';
import { SearchEmplComponent } from './search-empl/search-empl.component';
import { InitilyPipe } from '../pipes/initily.pipe';
import { MessageComponent } from './message/message.component';
import { DialogService } from '../services/dialog.service';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    FormEquipComponent,
    FormEmplComponent,
    SearchEmplComponent,
    InitilyPipe,
    MessageComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
  ],
  entryComponents: [
    FormEmplComponent,
    FormEquipComponent,
    SearchEmplComponent,
    MessageComponent,
    ConfirmComponent
  ],
  exports: [
    InitilyPipe,
  ],
  providers: [
    DialogService
  ]
})
export class WindowsModule { }
