import './App.css';
import * as React from 'react';
import {Component} from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import EventosDatatable from './Datatables/EventosDatatable';

class EventosView extends Component{
    render() {
      const [valor, setValor] = '';
      return (
        <React.Fragment>
        <EventosDatatable/>
    </React.Fragment>
      );
    }
  }

  export default EventosView;