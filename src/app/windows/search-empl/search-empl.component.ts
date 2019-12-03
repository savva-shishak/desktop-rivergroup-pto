import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { newEmpl } from 'src/app/utility';
import { EmplJust } from 'src/app/types';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-search-empl',
  templateUrl: './search-empl.component.html',
  styleUrls: ['./search-empl.component.scss']
})
export class SearchEmplComponent {

  empl: EmplJust = newEmpl();

  constructor(
    private dialogRef: MatDialogRef<SearchEmplComponent>,
    public store: StoreService
  ) {
    this.empl.surname = this.empl.tabelNumber = '';
  }

  options: EmplJust[] = [];

  select(empl: EmplJust) {
    this.dialogRef.close(empl);
  }
}
