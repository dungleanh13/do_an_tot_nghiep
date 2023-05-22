import Types from "./Types ";

export const loginSuccess = (payload: any) => ({
    type: Types.LOGIN_SUCCESS,
    payload,
});