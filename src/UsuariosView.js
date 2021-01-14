import './App.css';
import * as React from 'react';
import { Component } from 'react';
//import { ComponentName } from 'primereact/{componentname}';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';


class UsuariosView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentWillMount() {
        fetch("http://localhost:54446/api/usuarios")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const [valor, setValor] = '';
        const { error, isLoaded, items } = this.state;
        if (!isLoaded) {
            return <p>Loading ...</p>;
        }
        if (error) {
            return <p>Error al cargar usuarios</p>;
        }
        return (
            <React.Fragment>
                <div class="row">
                    <div class="column left">
                        <Button icon="pi pi-plus" iconPos="right" />
                    </div>
                    <div class="column right">
                        <Button icon="pi pi-minus" iconPos="right" />
                    </div>
                    <div class="column middle">
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText placeholder="Search" />
                        </span>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                    </tr>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.apellidos}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </table>

            </React.Fragment>
        );
    }
}

export default UsuariosView;