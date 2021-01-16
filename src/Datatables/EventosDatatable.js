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

const EventosDatatable = () => {
    const [eventos, setEventos] = useState(null);
    const eventosGet = new Datos();

    const footer = (
        <div>
            <Button label="Añadir" icon="pi pi-plus" />
            <Button label="Eliminar" icon="pi pi-minus" className="p-button-secondary p-ml-2" />
        </div>   
    );

    const herramientas = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" />
            </React.Fragment>
        );
    }

    useEffect(() => {
        eventosGet.getEventos().then(res => setEventos(res));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Card footer={footer}>
                <DataTable value={eventos} header="Lista de eventos"
                className="p-datatable-gridlines">                    
                    <Column field="equipoLocal" header="Equipo Local" filter filterPlaceholder="Filtrar por equipo" ></Column>
                    <Column field="equipoVisitante" header="Equipo Visitante"></Column>
                    <Column field="fecha" header="Fecha del encuentro" filter filterPlaceholder="Filtrar por fecha"></Column>
                    <Column body={herramientas}></Column>
                </DataTable>
            </Card>
        </div>
    );
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<EventosDatatable />, rootElement);

export default EventosDatatable;