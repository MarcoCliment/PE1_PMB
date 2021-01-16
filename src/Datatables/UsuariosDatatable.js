import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../App.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect, useRef } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import Datos from '../UsuariosV';

const UsuariosDatatable = () => {
    const [usuarios, setUsuarios] = useState(null);
    const usuariosGet = new Datos();
    const toast = useRef(null);

    const confirmPw = () => {
        confirmDialog({
            message: 'Se restablecerá la contraseña, ¿está seguro?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: acceptPw,
            reject: reject
        });
    }
    
    var currRowData = null
    const confirmDel = (rowData) => {
        currRowData = rowData
        confirmDialog({
            message: 'Se eliminará el usuario ' + rowData.nombre + ' ' + rowData.apellidos +  ', ¿está seguro?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: acceptDel,
            reject: reject
        });
    }

    const acceptPw = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Se ha restablecido la contraseña', life: 3000 });
        //TODO - EN NUESTRA BASE DE DATOS NO EXISTE EL CAMPO CONTRASEÑA, PARA IMPLEMENTARLO, LANZARÍAMOS UN PUT DE LA CONTRASEÑA A VACÍO PARA FORZAR AL USUARIO A ASIGNARLA CUANDO VOLVIESE A INICIAR SESIÓN
    }
    const acceptDel = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Se ha eliminado el usuario ' + currRowData.nombre + ' ' + currRowData.apellidos +  '', life: 3000 });
        var uv = new Datos();
        uv.deleteUsuarios(currRowData.email)
        setTimeout(()=>{
            usuariosGet.getUsuarios().then(res => setUsuarios(res));
        },500)
    }

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Cancelado', detail: 'Operación cancelada', life: 3000 });
    }

    const herramientas = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-unlock" onClick={confirmPw} className="p-button-rounded p-button-success p-mr-2" />
                <Button icon="pi pi-trash" onClick={() => confirmDel(rowData)} className="p-button-rounded p-button-warning" />
            </React.Fragment>
        );
    }

    useEffect(() => {
        usuariosGet.getUsuarios().then(res => setUsuarios(res));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>            
            <Toast ref={toast} />
            <Card>
                <DataTable value={usuarios} header="Lista de usuarios"
                    className="p-datatable-gridlines">
                    <Column field="nombre" header="Nombre" filter filterPlaceholder="Filtrar por nombre" ></Column>
                    <Column field="apellidos" header="Apellidos" filter filterPlaceholder="Filtrar por apellidos" ></Column>
                    <Column field="email" header="Email" filter filterPlaceholder="Filtrar por email"></Column>
                    <Column field="banco" header="Banco"></Column>
                    <Column body={herramientas}></Column>
                </DataTable>
            </Card>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UsuariosDatatable />, rootElement);

export default UsuariosDatatable;