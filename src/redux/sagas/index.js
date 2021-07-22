import {take, takeEvery, takeLatest, takeLeading} from "redux-saga/effects";

export function* workerSaga() {
    console.log('workerSaga WORKED!');
}

export function* watchClickSaga() {
    yield takeEvery('CLICK', workerSaga)
}


export default function* rootSaga() {
    console.log('rootSaga RUN');
    yield watchClickSaga();
}
