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

const ApuestasDatatable = () => {
    const [apuestas, setApuestas] = useState(null);
    const apuestasGet = new Datos();

    const footer = (
        <div>
            <Button label="Añadir mercados" icon="pi pi-plus" />
        </div>   
    );

    const herramientas = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-lock" className="p-button-rounded p-button-warning" />
            </React.Fragment>
        );
    }

    const precioBody = (rowData) => {
        return moneda(rowData.montoApuesta);
    }

    const moneda = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
    }

    useEffect(() => {
        apuestasGet.getApuestas().then(res => setApuestas(res));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    return (
        <div>
            <Card footer={footer}>
                <DataTable value={apuestas} header="Lista de apuestas" className="p-datatable-gridlines">                    
                    <Column field="email" header="Email" filter filterPlaceholder="Filtrar por email" ></Column>
                    <Column field="idEvento" header="Evento" filter filterPlaceholder="Filtrar por evento" ></Column>
                    <Column field="tipoApuesta" header="Mercado" filter filterPlaceholder="Filtrar por mercado" ></Column>
                    <Column field="cuota" header="Cuota"></Column>
                    <Column field="montoApuesta" body= {precioBody} header="Monto de la apuesta"></Column>
                    <Column field="fecha" header="Fecha"></Column>
                    <Column body={herramientas}></Column>
                </DataTable>
            </Card>
        </div>
    );
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<ApuestasDatatable />, rootElement);

export default ApuestasDatatable;