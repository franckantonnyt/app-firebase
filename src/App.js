import { useEffect, useState } from 'react';
import { getUsers, setUser } from "./services/Api";
import './App.css';

const App = () => {
  const [listUser, setListUser] = useState([]);

  const getUserDispatch = async () => {
    const listUsers = await getUsers();
    setListUser(listUsers);
  }

  useEffect(() => {
    if (listUser.length === 0) {
      getUserDispatch();
    }
  }, [listUser.length]);

  const sendSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value && e.target.age.value && e.target.state.value) {
      setUser(listUser.length + 1, e.target.name.value, e.target.age.value, e.target.state.value);
    }
  }

  return (
    <div className="App">
      <form className="container-input" onSubmit={sendSubmit}>
        <input name="name" type="text" placeholder="Nome" />
        <input name="age" type="number" placeholder="Idade" />
        <input name="state" type="text" placeholder="Estado" />
        <button>Cadastrar</button>
      </form>
      <div className="container-listUsers">
        <h1>Lista de Usuarios</h1>
        <ul>
          {listUser.length > 0 && listUser.map(({ name, age, state }, index) =>
            <li key={index}>
              <h2>{name}</h2>
              <h2>{age}</h2>
              <h2>{state}</h2>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
