import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';

const DialogMercados = () => {
    const [displayBasic, setDisplayBasic] = useState(false);

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Sí" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    <Dialog header="Dar de alta mercados de apuesta" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Dialog>

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    
}
export default DialogMercados;