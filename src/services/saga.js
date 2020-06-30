import { all, takeLatest } from "redux-saga/effects";

import { RepoTypes, requestRepos } from "./ducks/repos";

export function* root() {
  yield all([takeLatest(RepoTypes.request, requestRepos)]);
}
