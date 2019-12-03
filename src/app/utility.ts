import { Empl, Equipment, EmplJust } from './types';

export function newEmpl(): Empl {
    return Object.create({
        surname: '',
        name: '',
        patronymic: '',

        tabelNumber: 'РГУ-',
        placeOfResidence: '',
        subdivision: '',
        phone: '',

        equips: []
    });
}

export function newEquip(holder: EmplJust): Equipment {
    return {
        name: '',
        numInventory: null,
        model: '',
        numModel: '',
        serialNum: '',
        holderId: holder.id
    };
}

class Counter {
    private counterEmpls = 0;
    private counterEquips = 0;

    public get empls(): number {
        return ++this.counterEmpls;
    }

    public get equips(): number {
        return ++this.counterEquips;
    }
}

const counter = new Counter();
