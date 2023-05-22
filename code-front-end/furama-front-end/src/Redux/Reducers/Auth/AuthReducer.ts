import Types from '../../Types';
import {AnyAction} from 'redux';
import {IUser} from '../../../interface';

const initState: IUser = {
    user_name: "",
    address: "",
    email: "",
    password: "",
    enabled: false,
    birthday: "",
    fullName: "",
    gender: "",
    phone: "",
    user_id: "",
    admin: false
};

const authReducer = (state = initState, action: AnyAction) => {
    const {type, payload} = action;
    switch (type) {
        case Types.LOGIN_SUCCESS: {
            return {
                ...state,
                ...payload,
            };
        }
        default:
            return state;
    }
};

export default authReducer;
