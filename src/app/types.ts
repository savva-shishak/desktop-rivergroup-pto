export interface Empl extends EmplJust {
    placeOfResidence: string;
    placeOfRegistration: string;
    phone: string;
    subdivision: string;

    equips?: Equipment[];
}

export interface EmplJust {
    id?: number;
    name: string;
    surname: string;
    patronymic: string;

    tabelNumber: string;
}

export interface EquipJust {
    id?: number;
    numInventory: number;

    name: string;
}

export interface Equipment extends EquipJust {
    model: string;
    numModel: string;

    serialNum: string;

    holder?: EmplJust;
    holderId?: number;
}

export interface Store {
    equips: Equipment[];
    empls: Empl[];
}
