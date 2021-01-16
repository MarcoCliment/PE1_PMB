import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../App.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect, useRef } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import Datos from '../UsuariosV';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';

const EventosDatatable = () => {
    const [eventos, setEventos] = useState(null);
    const eventosGet = new Datos();
    const toast = useRef(null);
    const [product, setProduct] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [productDialog, setProductDialog] = useState(false);
    
    const [productAdd, setProductAdd] = useState(null);
    const [submittedAdd, setSubmittedAdd] = useState(false);
    const [productDialogAdd, setProductDialogAdd] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [date8, setDate8] = useState(null);
    const [date8Add, setDate8Add] = useState(null);

    const footer = (
        <div>
            <Button label="Añadir" icon="pi pi-plus" onClick={() => editProductAdd()}/>
        </div>
    );

    var currRowData = null
    const confirmDel = (rowData) => {
        currRowData = rowData
        confirmDialog({
            message: 'Se eliminará el evento del ' + rowData.equipoLocal + ' contra ' + rowData.equipoVisitante + ', ¿está seguro?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: acceptDel,
            reject: reject
        });
    }
    const acceptDel = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Se ha eliminado evento del ' + currRowData.equipoLocal + ' contra ' + currRowData.equipoVisitante + '', life: 3000 });
        var uv = new Datos();
        uv.deleteEvento(currRowData.idEvento)
        setTimeout(() => {
            eventosGet.getEventos().then(res => setEventos(res));
        }, 500)
    }

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Cancelado', detail: 'Operación cancelada', life: 3000 });
    }

    const herramientas = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editProduct()} />
                <Button icon="pi pi-times" className="p-button-rounded p-button-warning" onClick={() => confirmDel(rowData)} />
            </React.Fragment>
        );
    }

    useEffect(() => {
        eventosGet.getEventos().then(res => setEventos(res));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    
    const hideDialogAdd = () => {
        setSubmittedAdd(false);
        setProductDialogAdd(false);
    }

    const editProductAdd = (productAdd) => {
        setProductAdd({ ...productAdd });
        setProductDialogAdd(true);
    };


    const acceptMerc = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Se ha modificado el evento', life: 3000 });
        hideDialog();

        var dt = new Datos();
        const event = product;
        event.date = selectedDate;
        dt.postEventos(event);

        setTimeout(()=>{
            eventosGet.getEventos().then(res => setEventos(res));
        },500)
    }


    const cancelMerc = () => {
        toast.current.show({ severity: 'info', summary: 'Cancelado', detail: 'No se ha añadido un elemento', life: 3000 });
        hideDialog();
    }
    
    const acceptAdd = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Se ha añadido un evento', life: 3000 });
        hideDialogAdd();
        var dt = new Datos();
        dt.postEventos(productAdd);
        setTimeout(()=>{
            eventosGet.getEventos().then(res => setEventos(res));
        },500)

    }


    const cancelAdd = () => {
        toast.current.show({ severity: 'info', summary: 'Cancelado', detail: 'No se ha añadido un evento', life: 3000 });
        hideDialogAdd();
    }

    const dialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" onClick={cancelMerc} className="p-button-text" />
            <Button label="Sí" icon="pi pi-check" onClick={acceptMerc} className="p-button-text" />
        </React.Fragment>
    );

    
    const dialogFooterAdd = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" onClick={cancelAdd} className="p-button-text" />
            <Button label="Sí" icon="pi pi-check" onClick={acceptAdd} className="p-button-text" />
        </React.Fragment>
    );

    return (
        <div>
            <Toast ref={toast} />
            <Card footer={footer}>
                <DataTable value={eventos} header="Lista de eventos"
                    className="p-datatable-gridlines">
                    <Column field="equipoLocal" header="Equipo Local" filter filterPlaceholder="Filtrar por equipo" ></Column>
                    <Column field="equipoVisitante" header="Equipo Visitante"></Column>
                    <Column field="fecha" header="Fecha del encuentro" filter filterPlaceholder="Filtrar por fecha"></Column>
                    <Column body={herramientas}></Column>
                </DataTable>
            </Card>
            <Dialog footer={dialogFooter}  visible={productDialog} header="Seleccione una nueva fecha" modal className="p-fluid" onHide={hideDialog}>
                <div className="p-field" style={{ width: '800px', heigth: '900px' }}>
                        <Calendar id="time24" value={date8} onChange={(e) => setDate8(e.value)} showTime showSeconds showWeek />
                </div>
            </Dialog>

            
            <Dialog footer={dialogFooterAdd}  visible={productDialogAdd} header="Añada un nuevo elemento" modal className="p-fluid" onHide={hideDialogAdd}>
                <div className="p-field" style={{ width: '800px', heigth: '900px' }}>
                <label>Equipo Local</label>
                <InputText></InputText>
                <label>Equipo Visitante</label>
                <InputText></InputText>
                <label>Fecha de encuentro</label>
                    <Calendar id="time24Add" value={date8Add} onChange={(e) => setDate8Add(e.value)} showTime showSeconds showWeek />
                </div>
            </Dialog>

        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<EventosDatatable />, rootElement);

export default EventosDatatable;