import './App.css';
import * as React from 'react';
import {Component} from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import ApuestasDatatable from './Datatables/ApuestasDatatable';


class ApuestasView extends Component{
    render() {
      return(<React.Fragment>
              <ApuestasDatatable />
          </React.Fragment>
      );
    }
  }

  export default ApuestasView;
