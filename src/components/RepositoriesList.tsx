import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store";
import { Action } from "../store/actions";
import { RepositoriesState } from "../store/reducers/repositories.reducers";

interface State {
  repositories: RepositoriesState;
}

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const repositories = useSelector((state: State) => state.repositories);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(actionCreators.searchRepositories(term) as any);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      <ul>
        {repositories.data.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoriesList;
