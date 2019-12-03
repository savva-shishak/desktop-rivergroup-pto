import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empl, Equipment, EquipJust, EmplJust } from 'src/app/types';
import { DialogService } from 'src/app/services/dialog.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-info-equip',
  templateUrl: './info-equip.component.html',
  styleUrls: ['./info-equip.component.scss']
})
export class InfoEquipComponent implements OnInit {

  public equip: Equipment;
  public message = 'Выберите оборудование';
  public holder: Empl;

  @Output() public upload = new EventEmitter<any>();

  constructor(
    private store: StoreService, private client: DialogService
  ) {}

  public ngOnInit() {
    this.closePanel();
  }

  public getEquipInfo(id) {
    this.closePanel();
    this.message = null;

    this.equip = this.store.findEquipInStorage(id);
    this.holder = this.store.findEmplInStorage(this.equip.holderId);
  }

  public closePanel() {
    this.equip = null;

    this.message = 'Выберите оборудование';
  }

  public change() {
    this.client.promptEquip(this.equip, data => {
      this.equip = {
        ...this.equip,
        ...data
      };
    });
  }

  public delete() {
    this.store.deleteEquip(this.equip.id).subscribe(res => {
      this.closePanel();
      this.upload.emit();
    });
  }

  public exchangeHolder() {
    this.client.searchEmpl(res => {
      this.store.exchangeHolderOfEquip(this.equip.id, res.id).subscribe(() => {
        this.getEquipInfo(this.equip.id);
        this.upload.emit();
      });
    });
  }
}
