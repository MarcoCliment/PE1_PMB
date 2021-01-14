import './App.css';
import * as React from 'react';
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

  export default UsuariosView;