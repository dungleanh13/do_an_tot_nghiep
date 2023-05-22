import {IUser} from "../interface";
import {AnyAction} from "redux";
import Types from "./Types ";

const initialState: IUser = {
    user_id: "",
    phone: "",
    gender: "",
    fullName: "",
    enabled: false,
    birthday: "",
    email: "",
    address: "",
    password: "",
    user_name: "",
    admin:  false
};

export const rootReducer = (state = initialState, action: AnyAction) => {
    const {type, payload} = action;
    switch (type) {
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};
