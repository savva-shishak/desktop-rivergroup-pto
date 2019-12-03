import { Empl, Equipment, EmplJust } from './types';

import * as uuid from 'uuid/v4';

let count = 0;

export function newEmpl(): Empl {
    return {
        id: count++,
        surname: 'Пушкин' + count++,
        name: 'Александр',
        patronymic: 'Сергеевич',

        tabelNumber: 'РГУ-',
        placeOfResidence: 'ывп',
        placeOfRegistration: 'test',
        subdivision: 'выап',
        phone: 'вап',
    };
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
