import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../App.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Datos from '../UsuariosV';

const UsuariosDatatable = () => {
    const [usuarios, setUsuarios] = useState(null);
    const usuariosGet = new Datos();

    const footer = (
        <div>
            <Button label="Añadir" icon="pi pi-plus" />
            <Button label="Eliminar" icon="pi pi-minus" className="p-button-secondary p-ml-2" />
        </div>   
    );
    const herramientas = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-unlock" className="p-button-rounded p-button-success p-mr-2" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" />
            </React.Fragment>
        );
    }

    useEffect(() => {
        usuariosGet.getUsuarios().then(res => setUsuarios(res));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <DataTable value={usuarios} header="Lista de usuarios"
            className="p-datatable-gridlines">                    
                <Column field="nombre" header="Nombre" filter filterPlaceholder="Filtrar por nombre" ></Column>
                <Column field="apellidos" header="Apellidos" filter filterPlaceholder="Filtrar por apellidos" ></Column>
                <Column field="email" header="Email" filter filterPlaceholder="Filtrar por email"></Column>
                <Column field="banco" header="Banco"></Column>
                <Column body={herramientas}></Column>
            </DataTable>
        </div>
    );
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<UsuariosDatatable />, rootElement);

export default UsuariosDatatable;