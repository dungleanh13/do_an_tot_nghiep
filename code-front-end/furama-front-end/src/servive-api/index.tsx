import ClientNetwork from "../axios";
import {ParamRegister} from "../interface";
const API: ClientNetwork = new ClientNetwork()
export const register = (params: ParamRegister) => {
    const url = '/register';
    return API.post(url, params, {});
}
