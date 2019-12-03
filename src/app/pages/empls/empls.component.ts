import { Component, OnInit, ViewChild } from '@angular/core';
import { Empl } from 'src/app/types';
import { InfoEmplComponent } from 'src/app/components/info-empl/info-empl.component';
import { newEmpl } from '../../utility';
import { DialogService } from 'src/app/services/dialog.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-empls',
  templateUrl: './empls.component.html',
  styleUrls: ['./empls.component.scss']
})
export class EmplsComponent implements OnInit {

  @ViewChild(InfoEmplComponent, {static: false}) emplInfo: InfoEmplComponent;

  public selectedEmpl: Empl;

  empls: Empl[] = [];
  openList = false;

  newEmpl: Empl = newEmpl();
  selectionEmpl: Empl;

  constructor(
    private store: StoreService, private client: DialogService
  ) { }

  ngOnInit() {
    this.empls = this.store.empls;
    this.openList = true;
  }

  createEmpl() {
    this.client.promptEmpl(newEmpl(), data => {
      this.store.createEmpl(data);
      this.update();
    });
  }

  searchEmpl() {
    this.client.searchEmpl((data: Empl) => {
      this.selectedEmpl = data;
    });
  }

  update() {
    this.openList = false;

    this.store.getEmpls.subscribe(empls => {
      this.empls = empls;
      this.openList = true;
    });
  }

  inityli(empl: Empl): string {
    if (empl.surname == null) {
      return empl.name;
    }

    return empl.surname + ' ' + empl.name[0] + '. ';
  }
}
