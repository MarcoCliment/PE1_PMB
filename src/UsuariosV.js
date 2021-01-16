import axios from 'axios';

export default class Datos {

    getUsuarios() {
        return axios.get('http://localhost:54446/api/usuarios').then(res => res.data);
    }
    getEventos() {
        return axios.get('http://localhost:54446/api/eventos').then(res => res.data);
    }
    getApuestas() {
        return axios.get('http://localhost:54446/api/apuestas').then(res => res.data);
    }
}