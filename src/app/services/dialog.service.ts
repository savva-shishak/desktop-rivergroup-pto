import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageComponent } from '../windows/message/message.component';
import { FormEmplComponent } from '../windows/form-empl/form-empl.component';
import { newEmpl } from '../utility';
import { Empl, EquipJust, Equipment, EmplJust } from '../types';
import { FormEquipComponent } from '../windows/form-equip/form-equip.component';
import { SearchEmplComponent } from '../windows/search-empl/search-empl.component';
import { ConfirmComponent } from '../windows/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private message: MatDialogRef<MessageComponent>;

  constructor(
    private dialog: MatDialog
  ) { }

  public alert(msg: string, delay: number = null) {
    if (this.message) {
      this.message.close();
    }

    this.message = this.dialog.open(MessageComponent, {
      data: msg,
      width: '600px'
    });

    if (delay) {
      setTimeout(() => {
        this.message.close();
        this.message = null;
      }, delay);
    }
  }

  public confirm(message: string, ifTrue: () => void, ifFalse: (() => void) = () => {}) {
    this.dialog.open(ConfirmComponent, {});
  }

  public promptEmpl(data: Empl, sub: (res: Empl) => void) {
    this.promptEmplRef(data).afterClosed().subscribe(res => {
      if (res) {
        sub(res);
      }
    });
  }

  public promptEquip(data: Equipment, sub: (res: Equipment) => void) {
    this.promptEquipRef(data).afterClosed().subscribe(res => {
      if (res) {
        sub(res);
      }
    });
  }

  public promptEmplRef(data: Empl = newEmpl()) {
    return this.dialog.open(FormEmplComponent, {
      width: '600px',
      data
    });
  }

  public promptEquipRef(data: Equipment) {
    return this.dialog.open(FormEquipComponent, {
      width: '600px',
      data
    });
  }

  public searchEmpl(sub: (res: EmplJust) => void) {
    this.dialog.open(SearchEmplComponent, {
      width: '1000px',
      height: '95%'
    })
    .afterClosed()
    .subscribe((data: EmplJust) => {
      if (data) {
        sub(data);
      }
    });
  }
}
