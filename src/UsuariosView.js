import './App.css';
import * as React from 'react';
import { Component } from 'react';
//import { ComponentName } from 'primereact/{componentname}';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import UsuariosDatatable from "./Datatables/UsuariosDatatable"

class UsuariosView extends Component {
    render() {
        const [valor, setValor] = '';
        return (
            <React.Fragment>
                <UsuariosDatatable/>
            </React.Fragment>
        );
    }
}

export default UsuariosView;