import {IUser} from '../../../interface';
import Types from '../../Types';

const setLogin = (payload: IUser) => ({
    type: Types.LOGIN_SUCCESS,
    payload,
});

export {setLogin};
