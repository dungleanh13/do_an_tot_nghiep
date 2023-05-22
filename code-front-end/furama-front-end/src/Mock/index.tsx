import {AddRoom, AddUser, Contract, ContractRoom, IUser, Room, RoomUpdate} from "../interface";

export const RoomMock: Room = {
    infoRoomId: "",
    descriptionOtherConvenience: "",
    img: "",
    numberOfFloors: "",
    roomArea: "",
    roomCode: "",
    roomCost: 0,
    poolArea: "",
    roomName: "",
    status: "",
    roomMaxPeople: "",
    quantityMax: 0,
    startDate: "",
    endDate: "",
    totalDate: 0
}

export const RoomUpdateMOck: RoomUpdate = {
    img: "",
    roomName: "",
    roomArea: "",
    descriptionOtherConvenience: "",
    infoRoomId: "",
    roomCode: "",
    roomCost: 0,
    status: "",
    numberOfFloors: ""
}


export const AddUserMock: AddUser = {
    user_name: "",
    full_name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    birthday: "",
    pass_word: "123"
}
export const AddRoomMock: AddRoom = {
    img: "",
    roomName: "",
    descriptionOtherConvenience: "",
    roomArea: "",
    roomCost: 0,
    roomCode: "",
    numberOfFloors: ""
}

export const UserMock: IUser = {
    user_id: "",
    phone: "",
    gender: "",
    fullName: "",
    enabled: false,
    birthday: "",
    email: "",
    user_name: "",
    address: "",
    password: "",
    admin: false
}

export const ContractMock: Contract = {
    contract_id: "",
    total_money: 0,
    user: UserMock,
    status: "",
    contract_code: ""
}

export const ContractRoomMock: ContractRoom = {
    money: "",
    contractRoomId: "",
    contractCode: "",
    infoRoomId: "",
    contractStartDate: "",
    contractEndDate: "",
    status: "",
    roomName: ""
}