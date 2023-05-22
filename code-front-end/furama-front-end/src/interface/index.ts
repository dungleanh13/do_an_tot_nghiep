export interface ParamRegister {
    user_name: string;
    pass_word: string;
    full_name: string;
    birthday: string;
    gender: string;
    phone: string;
    email: string;
    address: string;
}

export interface Room {
    descriptionOtherConvenience: string,
    img: string,
    infoRoomId: string,
    numberOfFloors: string,
    poolArea: string,
    roomArea: string,
    roomCode: string,
    roomCost: number,
    roomMaxPeople: string,
    roomName: string,
    status: string
    quantityMax: number
    startDate: string,
    endDate: string
    totalDate: number
}

export interface RoomUpdate {
    descriptionOtherConvenience: string,
    img: string,
    infoRoomId: string,
    numberOfFloors: string,
    roomArea: string,
    roomCode: string,
    roomCost: number,
    roomName: string,
    status: string
}

export interface Contract {
    contract_id: string,
    user: IUser
    total_money: number,
    status: string
    contract_code: string
}

export interface ContractRoom {
    contractRoomId: string
    infoRoomId: string
    contractCode: string
    contractStartDate: string
    contractEndDate: string
    money: string
    status: string,
    roomName: string
}

export interface CreateContract {
    contract_deposit: number,
    info_room_list: Room[],
    user_id: string,
    contract_code: string
}

export interface UpdateContract {
    status: string
}

export interface AddUser {
    user_name: string,
    full_name: string,
    email: string,
    phone: string,
    address: string,
    gender: string,
    birthday: string,
    pass_word: string
}

export interface AddRoom {
    descriptionOtherConvenience: string,
    img: any,
    numberOfFloors: string,
    roomArea: string,
    roomCost: number,
    roomCode: string,
    roomName: string
}

export interface ILogin {
    user_name: string,
    password: string
}

export interface IUser {
    user_id: string
    user_name: string
    password: string
    enabled: boolean
    fullName: string
    birthday: string
    gender: string
    phone: string
    email: string
    address: string,
    admin: boolean
}

export interface ParamGetTotalRoom {
    start_date: string,
    end_date: string
}