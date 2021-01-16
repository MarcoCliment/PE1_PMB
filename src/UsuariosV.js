import axios from 'axios';

export default class Datos {

    getUsuarios() {
        return axios.get('http://localhost:54446/api/usuarios').then(res => res.data);
    }
    deleteUsuarios(email){
        return axios.delete('http://localhost:54446/api/usuarios/' + email)
    }
    postMercados(mercado){
        return axios.post('http://localhost:54446/api/mercados/' + mercado)
    }

    getEventos() {
        return axios.get('http://localhost:54446/api/eventos').then(res => res.data);
    }

    postEventos(evento){
        return axios.post('http://localhost:54446/api/evento/', evento)
    }

    deleteEvento(eventoId){
        return axios.delete('http://localhost:54446/api/eventos/' + eventoId)
    }
    getApuestas() {
        return axios.get('http://localhost:54446/api/apuestas').then(res => res.data);
    }
}