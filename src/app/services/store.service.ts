import { Injectable } from '@angular/core';
import { Equipment, Store, EmplJust, Empl } from '../types';
import { Observable } from 'rxjs';

// tslint:disable-next-line:no-string-literal
const { remote } = window['require']('electron');
const fs = remote.require('fs');
const path = remote.require('path');

let store: Store;

try {
  store = JSON.parse(fs.readFileSync('store.json'));
} catch (e) {
  store = {equips: [], empls: []};
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public equips: Equipment[] = store.equips;
  public empls: Empl[] = store.empls;

  public get getEquips(): Observable<Equipment[]> {
    return new Observable<Equipment[]>(sub => {
      sub.next(this.equips);
    });
  }

  public createEquip(equip: Equipment, holderId: number) {
    if (this.equips.length !== 0) {
      equip.id = this.equips[this.equips.length - 1].id + 1;
    } else {
      equip.id = 1;
    }

    equip.holderId = holderId;

    this.equips.unshift(equip);

    this.saveData();
  }

  public changeDataEquip(equipId: number, body: Equipment) {
    return new Observable(sub => {
      this.copyOptionsEquip(body, this.findEquipInStorage(equipId));
      this.saveData();
      sub.next();
    });
  }

  public deleteEquip(id: number) {
    return new Observable(sub => {

      const newEmpls: Equipment[] = this.equips.filter(empl => {
        return empl.id !== id;
      });

      this.equips = newEmpls;

      this.saveData();

      sub.next();
    });
  }

  public exchangeHolderOfEquip(equipId: number, holderId: number) {
    return new Observable(sub => {
      this.findEquipInStorage(equipId).holderId = holderId;
      this.saveData();
      sub.next();
    });
  }

  public findEquip(id: number): Observable<Equipment> {
    return new Observable(sub => {

      this.equips.forEach(eq => {
        if (eq.id === id) {
          sub.next(eq);
        }
      });
    });
  }

  private copyOptionsEquip(source: Equipment, target: Equipment) {
    target = {
      ...source,
      id: target.id
    };
  }

  public findEquipInStorage(id: number): Equipment {
    let searchEquip: Equipment;

    this.equips.forEach(empl => {
      if (empl.id === id) {
        searchEquip = empl;
      }
    });

    return searchEquip;
  }

  public get getEmpls(): Observable<Empl[]> {
    return new Observable<Empl[]>(sub => {
      sub.next(this.empls);
    });
  }

  public createEmpl(empl: Empl) {
    return new Observable(() => {
      if (this.empls.length !== 0) {
        empl.id = this.empls[this.empls.length - 1].id + 1;
      } else {
        empl.id = 1;
      }
      this.empls.unshift(empl);
      this.saveData();
    });
  }

  public deleteEmpl(id: number) {
    return new Observable(sub => {

      const newEmpls: Empl[] = this.empls.filter(empl => {
        return empl.id !== id;
      });

      this.empls = newEmpls;

      this.saveData();

      sub.next();
    });
  }

  public updateEmpl(empl: Empl, id: number) {
    return new Observable(sub => {
      const updatingEmpl = this.findEmplInStorage(id);
      this.copyOptionsEmpl(empl, updatingEmpl);
      this.saveData();
    });
  }

  public search(body: EmplJust) {
    const searchingEmpls = [];

    this.empls.forEach(empl => {
      if (
        empl.surname.indexOf(body.surname) !== -1 &&
        empl.tabelNumber.indexOf(body.tabelNumber) !== -1
      ) {
        searchingEmpls.unshift(empl);
      }
    });

    return searchingEmpls;
  }

  public findEmpl(id: number): Observable<Empl> {
    return new Observable<Empl>(sub => {
      sub.next(this.findEmplInStorage(id));
    });
  }

  private copyOptionsEmpl(source: EmplJust, target: EmplJust) {
    target = {
      ...source,
      id: target.id
    };
  }

  public findEmplInStorage(id: number): Empl {
    let searchEmpl: Empl;

    this.empls.forEach(empl => {
      if (empl.id === id) {
        searchEmpl = empl;
      }
    });

    return searchEmpl;
  }

  public saveData() {
    const equips: Equipment[] = Object.assign(this.equips);
    const empls = Object.assign(this.empls);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.equips.length; i++) {
      if (equips[i].holder) {
        equips[i].holderId = equips[i].holder.id;
        equips[i].holder = undefined;
      }
    }

    const updatedStore = {empls, equips};

    fs.writeFile('store.json', JSON.stringify(updatedStore), err => {
      if (!err) {
        store = JSON.parse(fs.readFileSync('store.json'));

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.equips.length; i++) {
          if (equips[i].holder) {
            equips[i].holder = this.findEmplInStorage(equips[i].holderId);
          }
        }
      } else {
        console.error(err);
      }
    });
  }
}
