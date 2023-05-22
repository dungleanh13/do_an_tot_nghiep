import { all } from 'redux-saga/effects'
import authSaga from './Auth/AuthSaga'
export default function* rootSaga() {
    yield all([
        authSaga()
    ])
}