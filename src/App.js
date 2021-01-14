import './App.css';
import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import {Component} from 'react';
//import { ComponentName } from 'primereact/{componentname}';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



class UsuariosView extends Component{
  render() {
    const [valor, setValor] = '';
    return (
      <div class="row">
        <div class="column left">
        <Button icon="pi pi-plus" iconPos="right" />
        </div>
        <div class="column right">
        <Button icon="pi pi-minus" iconPos="right" />
        </div>
        <div class="column middle">
          <span className="p-float-label">
          <InputText id="username" valor={valor} onChange={(e) => 
          setValor(e.target.value)} />
          </span>
          <label htmlFor="username">Filtrar...</label></div>
      </div>
    );
  }
}

class ApuestasView extends Component{
  render() {
    return <h1>This is the Apuestas view</h1>;
  }
}

class EventosView extends Component{
  render() {
    return <h1>This is the Eventos view</h1>;
  }
}

class InformesView extends Component{
  render() {
    return <h1>This is the Informes view</h1>;
  }
}

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
