import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { request } from "../services/ducks/repos";

export function FetchReposByUser() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos);
  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(request(value));
  }

  return (
    <>
      <h1>Ultimate repo getter</h1>
      <label htmlFor="username">Username:</label>
      <br />
      <form onSubmit={handleSubmit}>
        <input id="username" value={value} onChange={(e) => setValue(e.target.value)}></input>{" "}
        <button type="submit">Procurar</button>
        {repos.loading ? (
          <>
            <br />
            loading...
          </>
        ) : (
          <ul>
            {repos.data.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
