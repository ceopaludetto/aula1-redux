import axios from "axios";
import { call, put } from "redux-saga/effects";

export const RepoTypes = {
  request: "@REPOS/REQUEST",
  success: "@REPOS/SUCCESS",
  failure: "@REPOS/FAILURE",
};

export const request = (username) => ({
  type: RepoTypes.request,
  payload: { username },
});

export const success = (data) => ({
  type: RepoTypes.success,
  payload: { data },
});

export const failure = (error) => ({
  type: RepoTypes.failure,
  payload: { error },
});

const initialState = {
  loading: false,
  success: false,
  failure: false,
  error: undefined,
  data: [],
};

export const repos = (state = initialState, action) => {
  switch (action.type) {
    case RepoTypes.request:
      return { ...state, loading: true };
    case RepoTypes.success:
      return { ...state, loading: false, success: true, data: action.payload.data };
    case RepoTypes.failure:
      return { ...state, loading: false, failure: true, error: action.payload.error };
    default:
      return state;
  }
};

export function* requestRepos(action) {
  try {
    const res = yield call(axios.get, `https://api.github.com/users/${action.payload.username}/repos`);

    if (res?.data) {
      yield put(success(res.data));
    } else {
      yield put(failure("Falha ao capturar repositorios"));
    }
  } catch (error) {
    yield put(failure(error));
  }
}
