import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../App.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect,useRef } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Datos from '../UsuariosV';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';

const ApuestasDatatable = () => {
    const [apuestas, setApuestas] = useState(null);
    const [product, setProduct] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [productDialog, setProductDialog] = useState(false);
    const apuestasGet = new Datos();
    const [selectedItem, setSelectedItem] = useState(null);

    const toast = useRef(null);

    const selectedItems = [
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'}
    ];

    const footer = (
        <div>
            <Button label="Añadir mercados" icon="pi pi-plus" onClick={() => editProduct()} />
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

    
    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const editProduct = (product) => {
        setProduct({...product});
        setProductDialog(true);
    };

    const acceptMerc = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Se ha añadido un elemento', life: 3000 });
        hideDialog();

        var dt = new Datos();
        dt.postMercados(selectedItem);

    }
    const cancelMerc = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'No se ha añadido un elemento', life: 3000 });
        hideDialog();
    }
    const dialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" onClick={cancelMerc} className="p-button-text" />
            <Button label="Sí" icon="pi pi-check" onClick={acceptMerc} className="p-button-text" />
        </React.Fragment>
    );
    

    return (
        <div>
            <Toast ref={toast} />
            <Card footer={footer}>
                <DataTable value={apuestas} header="Lista de apuestas" className="p-datatable-gridlines">                    
                    <Column field="email" header="Email" filter filterPlaceholder="Filtrar por email" ></Column>
                    <Column field="evento" header="Evento" filter filterPlaceholder="Filtrar por evento" ></Column>
                    <Column field="tipoApuesta" header="Mercado" filter filterPlaceholder="Filtrar por mercado" ></Column>
                    <Column field="cuota" header="Cuota"></Column>
                    <Column field="montoApuesta" body= {precioBody} header="Monto de la apuesta"></Column>
                    <Column field="fecha" header="Fecha"></Column>
                    <Column body={herramientas}></Column>
                </DataTable>
            </Card>
            <Dialog footer={dialogFooter} style={{ width: '450px',heigth:'300px' }} visible={productDialog} header="Seleccione un evento para crear los mercados" modal className="p-fluid" onHide={hideDialog}>
                <div className="p-field">
                    <label >Evento sin mercados</label>
                    <Dropdown value={selectedItem} options={selectedItems}  onChange={(e) => setSelectedItem(e.value)} />
                    <label >x1.5 x2.5 x3.5</label>
                </div>
            </Dialog>
        </div>
    );
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<ApuestasDatatable />, rootElement);

export default ApuestasDatatable;