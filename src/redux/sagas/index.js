//  other methods: take, takeLatest, takeLeading
import {takeEvery, put} from "redux-saga/effects";

async function getPeople() {
    try {
        const response = await fetch('https://swapi.dev/api/people');

        return await response.json();
    } catch (e) {
        console.log(e);
        return {};
    }
}

export function* workerSaga() {
    const data = yield getPeople();
    yield put({type: "SET_PEOPLE", payload: data.results});
}

export function* watchClickSaga() {
    yield takeEvery('CLICK', workerSaga)
}


export default function* rootSaga() {
    // console.log('rootSaga RUN');
    yield watchClickSaga();
}
