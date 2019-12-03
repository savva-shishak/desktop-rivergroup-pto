import { Component, OnInit, ViewChild } from '@angular/core';
import { EquipJust, EmplJust } from 'src/app/types';
import { InfoEquipComponent } from 'src/app/components/info-equip/info-equip.component';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-equips',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  @ViewChild(InfoEquipComponent, {static: true}) equipInfo: InfoEquipComponent;

  equips: EquipJust[] = [];
  openList = false;

  constructor(private store: StoreService) {}

  public upload() {
    this.openList = false;

    this.store.getEquips.subscribe(equips => {
      this.equips = equips;
      this.openList = true;
    });
  }

  ngOnInit() {
    this.store.getEquips.subscribe(equips => {
      this.equips = equips;
      this.openList = true;
    });
  }
}
