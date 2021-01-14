import './App.css';
import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import ApuestasView from './ApuestasView';
import EventosView from './EventosView';
import UsuariosView from './UsuariosView';
import InformesView from './InformesView';


function App() {
  return (
    <div className="App">
      <div className={'menu'}>
        <ul>
          <li>
            <NavLink to={'/usuarios'} activeClassName={'menu-active'}>Usuarios</NavLink>
            </li>
          <li>
            <NavLink to={'/apuestas'} activeClassName={'menu-active'}>Apuestas</NavLink>
          </li>
          <li>
            <NavLink to={'/eventos'} activeClassName={'menu-active'}>Eventos</NavLink>
          </li>
          <li>
            <NavLink to={'/informes'} activeClassName={'menu-active'}>Informes</NavLink>
          </li>
        </ul>
      </div>
      <div className={'display'}>
        <Switch>
          <Route path={'/usuarios'}>
            <UsuariosView/>
          </Route>
          <Route path={'/apuestas'}>
            <ApuestasView/>
          </Route>
          <Route path={'/eventos'}>
            <EventosView/>
          </Route>
          <Route path={'/informes'}>
            <InformesView/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
